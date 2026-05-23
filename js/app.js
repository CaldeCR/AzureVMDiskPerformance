// ==================== APP LOGIC ====================
// Azure VM and Disk Performance Limits Calculator
// Split from monolithic HTML — all UI logic, state, and new features

let selectedVm = null;
let diskCounter = 0;
let disks = [];

// ==================== DARK MODE ====================
function initTheme() {
    const saved = localStorage.getItem('azure-vm-calc-theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateThemeButton();
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    if (next === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('azure-vm-calc-theme', next);
    updateThemeButton();
    // Re-render burst chart if visible (colors change with theme)
    const sku = document.getElementById('burstSku').value;
    if (sku && BURST_SKUS[sku]) {
        const usage = parseFloat(document.getElementById('burstUsageCpu').value) || 0;
        updateBurstCreditChart(sku, usage);
    }
}

function updateThemeButton() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark ? '&#9788; Light Mode' : '&#9790; Dark Mode';
}

// ==================== AUTO-SAVE / LOAD (localStorage) ====================
const STORAGE_KEY = 'azure-vm-disk-config';

function autoSave() {
    const state = {
        vmPurpose: document.getElementById('vmPurpose').value,
        vmFamily: document.getElementById('vmFamily').value,
        vmSeries: document.getElementById('vmSeries').value,
        vmSku: document.getElementById('vmSku').value,
        disks: disks.map(d => ({ ...d })),
        diskCounter: diskCounter,
        timestamp: new Date().toISOString()
    };
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        showConfigStatus('Auto-saved');
    } catch (e) {
        // localStorage full or unavailable — silently ignore
    }
}

function autoLoad() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const state = JSON.parse(raw);
        if (!state || !state.vmPurpose) return;

        // Restore VM selection chain
        const purposeSel = document.getElementById('vmPurpose');
        purposeSel.value = state.vmPurpose;
        if (purposeSel.value !== state.vmPurpose) return; // purpose not found
        onPurposeChange();

        if (state.vmFamily) {
            document.getElementById('vmFamily').value = state.vmFamily;
            onFamilyChange();
        }
        if (state.vmSeries) {
            document.getElementById('vmSeries').value = state.vmSeries;
            onSeriesChange();
        }
        if (state.vmSku) {
            document.getElementById('vmSku').value = state.vmSku;
            onSkuChange();
        }

        // Restore disks
        if (state.disks && state.disks.length > 0) {
            disks = state.disks;
            diskCounter = state.diskCounter || state.disks.length;
            renderDiskTable();
            recalculate();
        }

        if (state.timestamp) {
            const ago = getTimeAgo(new Date(state.timestamp));
            showConfigStatus('Restored from ' + ago);
        }
    } catch (e) {
        // Corrupted data — ignore
    }
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
    return Math.floor(seconds / 86400) + 'd ago';
}

function showConfigStatus(msg) {
    const el = document.getElementById('configStatus');
    if (!el) return;
    el.textContent = msg;
    el.style.opacity = '1';
    setTimeout(() => { el.style.opacity = '0.6'; }, 2000);
}

function clearSavedConfig() {
    localStorage.removeItem(STORAGE_KEY);
    showConfigStatus('Saved config cleared');
}

// ==================== EXPORT CONFIG AS JSON ====================
function exportConfig() {
    if (!selectedVm && disks.length === 0) {
        alert('Nothing to export. Select a VM and/or add disks first.');
        return;
    }
    const config = {
        exportDate: new Date().toISOString(),
        tool: 'Azure VM and Disk Performance Calculator',
        vm: selectedVm ? {
            name: selectedVm.name,
            purpose: document.getElementById('vmPurpose').value,
            series: document.getElementById('vmSeries').value,
            vcpus: selectedVm.vcpus,
            memoryGiB: selectedVm.mem,
            maxDisks: selectedVm.maxDisks,
            cachedIops: selectedVm.cachedIops,
            cachedMbps: selectedVm.cachedMbps,
            uncachedIops: selectedVm.uncachedIops,
            uncachedMbps: selectedVm.uncachedMbps
        } : null,
        disks: disks.map(d => ({
            name: d.name,
            type: d.type,
            sku: d.sku,
            hostCaching: d.caching,
            iops: d.iops,
            mbps: d.mbps,
            burstEnabled: d.burst
        }))
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'azure-vm-disk-config-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showConfigStatus('Config exported');
}

// ==================== TAB NAVIGATION ====================
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// ==================== VM SELECTION ====================
const FAMILY_OVERRIDE = {
    "Ensv6": "Other",
    "Endsv6": "Other"
};

function getFamilyPrefix(seriesName) {
    if (FAMILY_OVERRIDE[seriesName]) return FAMILY_OVERRIDE[seriesName];
    if (seriesName.startsWith('Eb')) return 'Eb';
    const m = seriesName.match(/^[A-Z]+/);
    return m ? m[0] : seriesName;
}

function initPurposeDropdown() {
    const sel = document.getElementById('vmPurpose');
    for (const purpose of Object.keys(VM_DATA)) {
        const opt = document.createElement('option');
        opt.value = purpose;
        opt.textContent = purpose;
        sel.appendChild(opt);
    }
}

function onPurposeChange() {
    const purpose = document.getElementById('vmPurpose').value;
    const familySel = document.getElementById('vmFamily');
    const seriesSel = document.getElementById('vmSeries');
    const skuSel = document.getElementById('vmSku');
    familySel.innerHTML = '<option value="">-- Select Family --</option>';
    seriesSel.innerHTML = '<option value="">-- Select Series --</option>';
    skuSel.innerHTML = '<option value="">-- Select SKU --</option>';
    document.getElementById('vmLimitsSection').style.display = 'none';
    selectedVm = null;
    if (!purpose) return;
    const families = new Set();
    for (const series of Object.keys(VM_DATA[purpose])) {
        families.add(getFamilyPrefix(series));
    }
    Array.from(families).sort().forEach(family => {
        const opt = document.createElement('option');
        opt.value = family;
        opt.textContent = family === 'Other' ? 'Other families' : `${family}-family`;
        familySel.appendChild(opt);
    });
}

function onFamilyChange() {
    const purpose = document.getElementById('vmPurpose').value;
    const family = document.getElementById('vmFamily').value;
    const seriesSel = document.getElementById('vmSeries');
    const skuSel = document.getElementById('vmSku');
    seriesSel.innerHTML = '<option value="">-- Select Series --</option>';
    skuSel.innerHTML = '<option value="">-- Select SKU --</option>';
    document.getElementById('vmLimitsSection').style.display = 'none';
    selectedVm = null;
    if (!purpose || !family) return;
    for (const series of Object.keys(VM_DATA[purpose])) {
        if (getFamilyPrefix(series) !== family) continue;
        const opt = document.createElement('option');
        opt.value = series;
        opt.textContent = series;
        seriesSel.appendChild(opt);
    }
}

function onSeriesChange() {
    const purpose = document.getElementById('vmPurpose').value;
    const series = document.getElementById('vmSeries').value;
    const skuSel = document.getElementById('vmSku');
    skuSel.innerHTML = '<option value="">-- Select SKU --</option>';
    document.getElementById('vmLimitsSection').style.display = 'none';
    selectedVm = null;
    if (!purpose || !series) return;
    const skus = VM_DATA[purpose][series];
    for (const sku of Object.keys(skus)) {
        const opt = document.createElement('option');
        opt.value = sku;
        opt.textContent = `${sku} (${skus[sku].vcpus} vCPU, ${skus[sku].mem} GiB)`;
        skuSel.appendChild(opt);
    }
}

function onSkuChange() {
    const purpose = document.getElementById('vmPurpose').value;
    const series = document.getElementById('vmSeries').value;
    const skuName = document.getElementById('vmSku').value;
    if (!purpose || !series || !skuName) {
        document.getElementById('vmLimitsSection').style.display = 'none';
        selectedVm = null;
        return;
    }
    selectedVm = VM_DATA[purpose][series][skuName];
    selectedVm = normalizeVm(selectedVm);
    selectedVm.name = skuName;
    displayVmLimits();
    document.getElementById('vmLimitsSection').style.display = 'block';
    recalculate();
    autoSave();
}

// ==================== SCHEMA NORMALIZER ====================
function normalizeVm(vm) {
    if (!vm) return vm;
    if (!('local' in vm) && !('remote' in vm)) return Object.assign({}, vm);
    const out = { vcpus: vm.vcpus, mem: vm.mem };
    if (vm.local) {
        out.cachedIops = vm.local.tempIopsRR || 0;
        const rr = vm.local.tempMbpsRR || 0;
        const rw = vm.local.tempMbpsRW || 0;
        out.cachedMbps = rr + rw;
        out.local = vm.local;
    } else {
        out.cachedIops = 0;
        out.cachedMbps = 0;
        out.local = null;
    }
    if (vm.remote) {
        out.maxDisks = vm.remote.maxDataDisks || 0;
        out.uncachedIops = vm.remote.uncachedIopsPremium || 0;
        out.uncachedMbps = (vm.remote.uncachedMbpsPremium == null) ? Infinity : vm.remote.uncachedMbpsPremium;
        out.uncachedIopsBurst = (vm.remote.uncachedIopsBurstPremium != null) ? vm.remote.uncachedIopsBurstPremium : null;
        out.uncachedMbpsBurst = (vm.remote.uncachedMbpsBurstPremium != null) ? vm.remote.uncachedMbpsBurstPremium : null;
        out.remote = vm.remote;
    } else {
        out.maxDisks = 0;
        out.uncachedIops = 0;
        out.uncachedMbps = 0;
        out.uncachedIopsBurst = null;
        out.uncachedMbpsBurst = null;
        out.remote = null;
    }
    return out;
}

function displayVmLimits() {
    if (!selectedVm) return;
    document.getElementById('cachedIops').textContent = selectedVm.cachedIops > 0 ? selectedVm.cachedIops.toLocaleString() : 'N/A (no local storage)';
    document.getElementById('cachedMbps').textContent = selectedVm.cachedMbps > 0 ? selectedVm.cachedMbps.toLocaleString() + ' MB/s' : 'N/A';
    const rrRwRow = document.getElementById('cachedRrRwRow');
    if (selectedVm.local && selectedVm.local.tempMbpsRR != null && selectedVm.local.tempMbpsRW != null) {
        document.getElementById('cachedRrRw').textContent =
            selectedVm.local.tempMbpsRR.toLocaleString() + ' MB/s  /  ' +
            selectedVm.local.tempMbpsRW.toLocaleString() + ' MB/s';
        rrRwRow.style.display = '';
    } else {
        rrRwRow.style.display = 'none';
    }
    document.getElementById('uncachedIops').textContent = selectedVm.uncachedIops.toLocaleString();
    document.getElementById('uncachedMbps').textContent = isFinite(selectedVm.uncachedMbps) ? (selectedVm.uncachedMbps.toLocaleString() + ' MB/s') : 'N/A (not published)';
    document.getElementById('vmVcpus').textContent = selectedVm.vcpus;
    document.getElementById('vmMemory').textContent = selectedVm.mem + ' GiB';
    document.getElementById('vmMaxDisks').textContent = selectedVm.maxDisks;

    const series = document.getElementById('vmSeries').value;
    const controllerType = DISK_CONTROLLER_TYPE[series] || 'SCSI';
    const controllerEl = document.getElementById('vmDiskController');
    controllerEl.textContent = controllerType;
    if (controllerType.includes('NVMe')) {
        controllerEl.style.color = '#107c10';
    } else {
        controllerEl.style.color = '';
    }

    const linkEl = document.getElementById('vmDocLink');
    const url = VM_DOC_URLS[series];
    if (url) {
        linkEl.href = url;
        linkEl.textContent = `View ${series}-series documentation \u2197`;
    } else {
        linkEl.href = 'https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview';
        linkEl.textContent = 'View Azure VM sizes overview \u2197';
    }
}

// ==================== DISK MANAGEMENT ====================
function addDisk() {
    diskCounter++;
    const disk = {
        id: diskCounter,
        name: diskCounter === 1 ? 'OS Disk' : `Data Disk ${diskCounter - 1}`,
        type: 'Premium SSD',
        sku: 'P10 (128 GiB)',
        caching: diskCounter === 1 ? 'ReadWrite' : 'None',
        iops: 500,
        mbps: 100,
        burst: false
    };
    disks.push(disk);
    renderDiskTable();
    recalculate();
    autoSave();
}

function removeDisk(id) {
    disks = disks.filter(d => d.id !== id);
    renderDiskTable();
    recalculate();
    autoSave();
}

function onDiskTypeChange(id, newType) {
    const disk = disks.find(d => d.id === id);
    if (!disk) return;
    disk.type = newType;
    const firstSku = Object.keys(DISK_SKUS[newType])[0];
    disk.sku = firstSku;
    const skuData = DISK_SKUS[newType][firstSku];
    disk.iops = skuData.iops;
    disk.mbps = skuData.mbps;
    if (skuData.iopsBurst == null) disk.burst = false;
    if (newType === 'Ultra Disk' || newType === 'Premium SSD v2') {
        disk.caching = 'None';
    }
    renderDiskTable();
    recalculate();
    autoSave();
}

function onDiskSkuChange(id, newSku) {
    const disk = disks.find(d => d.id === id);
    if (!disk) return;
    disk.sku = newSku;
    const skuData = DISK_SKUS[disk.type][newSku];
    if (skuData) {
        disk.iops = skuData.iops;
        disk.mbps = skuData.mbps;
        if (skuData.iopsBurst == null) disk.burst = false;
    }
    renderDiskTable();
    recalculate();
    autoSave();
}

function onDiskCachingChange(id, newCaching) {
    const disk = disks.find(d => d.id === id);
    if (!disk) return;
    disk.caching = newCaching;
    recalculate();
    autoSave();
}

function onDiskBurstChange(id, checked) {
    const disk = disks.find(d => d.id === id);
    if (!disk) return;
    disk.burst = !!checked;
    renderDiskTable();
    recalculate();
    autoSave();
}

function onDiskNameChange(id, newName) {
    const disk = disks.find(d => d.id === id);
    if (disk) disk.name = newName;
    autoSave();
}

function onDiskIopsChange(id, val) {
    const disk = disks.find(d => d.id === id);
    if (disk) { disk.iops = parseInt(val) || 0; recalculate(); autoSave(); }
}

function onDiskMbpsChange(id, val) {
    const disk = disks.find(d => d.id === id);
    if (disk) { disk.mbps = parseInt(val) || 0; recalculate(); autoSave(); }
}

function renderDiskTable() {
    const tbody = document.getElementById('diskTableBody');
    tbody.innerHTML = '';
    disks.forEach((d, idx) => {
        const isCustom = (d.type === 'Ultra Disk' || d.type === 'Premium SSD v2');
        const noCaching = isCustom;
        const skuRef = (DISK_SKUS[d.type] || {})[d.sku];
        const burstSupported = !!(skuRef && skuRef.iopsBurst != null);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><input type="text" value="${escapeHtml(d.name)}" onchange="onDiskNameChange(${d.id}, this.value)" style="width:120px;"></td>
            <td>
                <div style="display:flex; align-items:center; gap:0.3rem;">
                    <select onchange="onDiskTypeChange(${d.id}, this.value)">
                        ${Object.keys(DISK_SKUS).map(t => `<option value="${t}" ${t===d.type?'selected':''}>${t}</option>`).join('')}
                    </select>
                    ${DISK_DOC_URLS[d.type] ? `<a href="${DISK_DOC_URLS[d.type]}" target="_blank" rel="noopener" title="View ${escapeHtml(d.type)} documentation" style="color:var(--azure-blue); text-decoration:none; font-size:0.95rem;">&#9432;</a>` : ''}
                </div>
            </td>
            <td>
                <select onchange="onDiskSkuChange(${d.id}, this.value)">
                    ${Object.keys(DISK_SKUS[d.type]).map(s => `<option value="${s}" ${s===d.sku?'selected':''}>${s}</option>`).join('')}
                </select>
            </td>
            <td>
                <select onchange="onDiskCachingChange(${d.id}, this.value)" ${noCaching ? 'disabled' : ''}>
                    <option value="None" ${d.caching==='None'?'selected':''}>None</option>
                    <option value="ReadOnly" ${d.caching==='ReadOnly'?'selected':''} ${noCaching?'disabled':''}>ReadOnly</option>
                    <option value="ReadWrite" ${d.caching==='ReadWrite'?'selected':''} ${noCaching?'disabled':''}>ReadWrite</option>
                </select>
            </td>
            <td>${isCustom ? `<input type="number" value="${d.iops}" onchange="onDiskIopsChange(${d.id}, this.value)">` : `<span>${(d.burst && skuRef && skuRef.iopsBurst ? skuRef.iopsBurst : d.iops).toLocaleString()}${d.burst && skuRef && skuRef.iopsBurst ? ' <small style="color:#8764b8;">(burst)</small>' : ''}</span>`}</td>
            <td>${isCustom ? `<input type="number" value="${d.mbps}" onchange="onDiskMbpsChange(${d.id}, this.value)">` : `<span>${(d.burst && skuRef && skuRef.mbpsBurst ? skuRef.mbpsBurst : d.mbps).toLocaleString()}${d.burst && skuRef && skuRef.mbpsBurst ? ' <small style="color:#8764b8;">(burst)</small>' : ''}</span>`}</td>
            <td style="text-align:center;">${burstSupported ? `<input type="checkbox" ${d.burst ? 'checked' : ''} onchange="onDiskBurstChange(${d.id}, this.checked)" title="Use disk burst IOPS/MBps">` : '<span style="color:#a19f9d;" title="This SKU does not support on-demand bursting">\u2014</span>'}</td>
            <td><span class="badge ${d.caching === 'None' ? 'badge-warning' : 'badge-ok'}">${d.caching === 'None' ? 'Uncached' : 'Cached'}</span></td>
            <td><button class="remove-btn" onclick="removeDisk(${d.id})" title="Remove disk">&times;</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ==================== RECALCULATE ====================
function recalculate() {
    if (!selectedVm) return;

    let cachedIops = 0, cachedMbps = 0, uncachedIops = 0, uncachedMbps = 0;
    let cachedMbpsRO = 0, cachedMbpsRW = 0;
    let uncachedIopsBurst = 0, uncachedMbpsBurst = 0;
    disks.forEach(d => {
        const skuRef = (DISK_SKUS[d.type] || {})[d.sku];
        const effIops = (d.burst && skuRef && skuRef.iopsBurst != null) ? skuRef.iopsBurst : d.iops;
        const effMbps = (d.burst && skuRef && skuRef.mbpsBurst != null) ? skuRef.mbpsBurst : d.mbps;
        if (d.caching === 'None') {
            uncachedIops += effIops;
            uncachedMbps += effMbps;
            uncachedIopsBurst += effIops;
            uncachedMbpsBurst += effMbps;
        } else {
            cachedIops += effIops;
            cachedMbps += effMbps;
            if (d.caching === 'ReadOnly') cachedMbpsRO += effMbps;
            else if (d.caching === 'ReadWrite') cachedMbpsRW += effMbps;
        }
    });

    const splitCachedMbps = !!(selectedVm.local && selectedVm.local.tempMbpsRR != null && selectedVm.local.tempMbpsRW != null);
    const hasBurstLimits = selectedVm.uncachedIopsBurst != null;

    updateBar('barCachedIops', 'usedCachedIops', 'limitCachedIops', cachedIops, selectedVm.cachedIops);
    updateBar('barCachedMbps', 'usedCachedMbps', 'limitCachedMbps', cachedMbps, selectedVm.cachedMbps);
    updateBar('barUncachedIops', 'usedUncachedIops', 'limitUncachedIops', uncachedIops, selectedVm.uncachedIops);
    updateBar('barUncachedMbps', 'usedUncachedMbps', 'limitUncachedMbps', uncachedMbps, selectedVm.uncachedMbps);

    const rowBurstIops = document.getElementById('rowUncachedIopsBurst');
    const rowBurstMbps = document.getElementById('rowUncachedMbpsBurst');
    if (hasBurstLimits) {
        rowBurstIops.style.display = '';
        rowBurstMbps.style.display = '';
        updateBar('barUncachedIopsBurst', 'usedUncachedIopsBurst', 'limitUncachedIopsBurst', uncachedIopsBurst, selectedVm.uncachedIopsBurst);
        updateBar('barUncachedMbpsBurst', 'usedUncachedMbpsBurst', 'limitUncachedMbpsBurst', uncachedMbpsBurst, selectedVm.uncachedMbpsBurst);
    } else {
        rowBurstIops.style.display = 'none';
        rowBurstMbps.style.display = 'none';
    }

    // Diagnosis
    const issues = [];
    if (selectedVm.cachedIops > 0 && cachedIops > selectedVm.cachedIops)
        issues.push(`Cached IOPS (${cachedIops.toLocaleString()}) exceeds VM limit (${selectedVm.cachedIops.toLocaleString()}) by ${(cachedIops - selectedVm.cachedIops).toLocaleString()} IOPS.`);
    if (splitCachedMbps) {
        const rrLimit = selectedVm.local.tempMbpsRR;
        if (cachedMbpsRO > rrLimit)
            issues.push(`ReadOnly cached Throughput (${cachedMbpsRO} MB/s) exceeds Random Read (RR) limit (${rrLimit} MB/s) by ${cachedMbpsRO - rrLimit} MB/s.`);
        if (cachedMbpsRW > selectedVm.cachedMbps)
            issues.push(`ReadWrite cached Throughput (${cachedMbpsRW} MB/s) exceeds Max Cached Throughput (${selectedVm.cachedMbps} MB/s) by ${cachedMbpsRW - selectedVm.cachedMbps} MB/s.`);
    } else if (selectedVm.cachedMbps > 0 && cachedMbps > selectedVm.cachedMbps)
        issues.push(`Cached Throughput (${cachedMbps} MB/s) exceeds VM limit (${selectedVm.cachedMbps} MB/s) by ${cachedMbps - selectedVm.cachedMbps} MB/s.`);
    if (uncachedIops > selectedVm.uncachedIops)
        issues.push(`Uncached IOPS (${uncachedIops.toLocaleString()}) exceeds VM limit (${selectedVm.uncachedIops.toLocaleString()}) by ${(uncachedIops - selectedVm.uncachedIops).toLocaleString()} IOPS.`);
    if (uncachedMbps > selectedVm.uncachedMbps)
        issues.push(`Uncached Throughput (${uncachedMbps} MB/s) exceeds VM limit (${selectedVm.uncachedMbps} MB/s) by ${uncachedMbps - selectedVm.uncachedMbps} MB/s.`);
    if (hasBurstLimits) {
        if (uncachedIopsBurst > selectedVm.uncachedIopsBurst)
            issues.push(`Uncached Burst IOPS (${uncachedIopsBurst.toLocaleString()}) exceeds VM burst limit (${selectedVm.uncachedIopsBurst.toLocaleString()}) by ${(uncachedIopsBurst - selectedVm.uncachedIopsBurst).toLocaleString()} IOPS.`);
        if (uncachedMbpsBurst > selectedVm.uncachedMbpsBurst)
            issues.push(`Uncached Burst Throughput (${uncachedMbpsBurst} MB/s) exceeds VM burst limit (${selectedVm.uncachedMbpsBurst} MB/s) by ${uncachedMbpsBurst - selectedVm.uncachedMbpsBurst} MB/s.`);
    }
    if (selectedVm.cachedIops === 0 && cachedIops > 0)
        issues.push(`This VM does not support host caching, but ${cachedIops.toLocaleString()} IOPS are configured with caching enabled. These will effectively use uncached limits.`);
    if (disks.length > selectedVm.maxDisks)
        issues.push(`Number of data disks (${disks.length}) exceeds VM maximum (${selectedVm.maxDisks}).`);

    const area = document.getElementById('diagnosisArea');
    if (disks.length === 0) {
        area.innerHTML = '<p style="color:var(--text-secondary); margin-top:1rem; font-size:0.9rem;">Add disks above to see the performance analysis.</p>';
    } else if (issues.length === 0) {
        area.innerHTML = `<div class="diagnosis ok"><h3>&#10003; Configuration OK</h3><p>All disk IOPS and throughput totals are within the VM's cached and uncached limits for <strong>${selectedVm.name}</strong>.</p></div>`;
    } else {
        area.innerHTML = `<div class="diagnosis issue"><h3>&#9888; Performance Throttling Detected</h3><p>The following limits will be exceeded on <strong>${selectedVm.name}</strong>, causing IO throttling:</p><ul>${issues.map(i => `<li>${i}</li>`).join('')}</ul><p style="margin-top:0.5rem;"><strong>Recommendation:</strong> Either upgrade the VM SKU, reduce the number/performance of disks, or change host caching settings to redistribute IO across cached/uncached limits.</p></div>`;
    }
}

function updateBar(barId, usedId, limitId, used, limit) {
    const bar = document.getElementById(barId);
    const usedEl = document.getElementById(usedId);
    const limitEl = document.getElementById(limitId);

    usedEl.textContent = used.toLocaleString();
    limitEl.textContent = '/ ' + (isFinite(limit) ? (limit > 0 ? limit.toLocaleString() : 'N/A') : 'N/A');

    if (!isFinite(limit)) {
        bar.style.width = '0%';
        bar.className = 'progress-bar ok';
        bar.textContent = '';
        return;
    }

    if (limit === 0) {
        bar.style.width = used > 0 ? '100%' : '0%';
        bar.className = 'progress-bar ' + (used > 0 ? 'warning' : 'ok');
        bar.textContent = used > 0 ? 'N/A' : '';
        return;
    }

    const pct = Math.min((used / limit) * 100, 100);
    bar.style.width = Math.max(pct, used > 0 ? 3 : 0) + '%';
    bar.textContent = Math.round(pct) + '%';

    if (pct > 100 || used > limit) {
        bar.className = 'progress-bar danger';
        bar.style.width = '100%';
        bar.textContent = Math.round((used / limit) * 100) + '% - EXCEEDED';
    } else if (pct > 80) {
        bar.className = 'progress-bar warning';
    } else {
        bar.className = 'progress-bar ok';
    }
}

// ==================== RESET FUNCTIONS ====================
function resetVmSelection() {
    document.getElementById('vmPurpose').value = '';
    document.getElementById('vmFamily').innerHTML = '<option value="">-- Select Family --</option>';
    document.getElementById('vmSeries').innerHTML = '<option value="">-- Select Series --</option>';
    document.getElementById('vmSku').innerHTML = '<option value="">-- Select SKU --</option>';
    document.getElementById('vmLimitsSection').style.display = 'none';
    selectedVm = null;
    autoSave();
}

function clearAllDisks() {
    disks = [];
    diskCounter = 0;
    renderDiskTable();
    recalculate();
    autoSave();
}

function resetAll() {
    resetVmSelection();
    clearAllDisks();
}

// ==================== VM QUICK SEARCH ====================
function buildSkuIndex() {
    const index = [];
    for (const [purpose, series] of Object.entries(VM_DATA)) {
        for (const [seriesName, skus] of Object.entries(series)) {
            for (const [skuName, data] of Object.entries(skus)) {
                index.push({ purpose, series: seriesName, sku: skuName, data });
            }
        }
    }
    return index;
}
const VM_SKU_INDEX = buildSkuIndex();

let searchHighlightIdx = -1;
let searchMatches = [];

function onVmSearchInput() {
    const query = document.getElementById('vmSearchInput').value.trim().toLowerCase();
    const container = document.getElementById('vmSearchResults');
    const btn = document.getElementById('vmSearchBtn');
    searchHighlightIdx = -1;

    if (query.length < 2) {
        container.style.display = 'none';
        container.innerHTML = '';
        searchMatches = [];
        btn.disabled = true;
        return;
    }

    searchMatches = VM_SKU_INDEX.filter(entry =>
        entry.sku.toLowerCase().includes(query)
    ).slice(0, 20);

    if (searchMatches.length === 0) {
        container.innerHTML = '<div style="padding:0.7rem 1rem; color:var(--text-secondary); font-size:0.88rem;">No matching VM SKUs found.</div>';
        container.style.display = 'block';
        btn.disabled = true;
        return;
    }

    container.innerHTML = searchMatches.map((m, i) =>
        `<div class="search-result-item" data-idx="${i}" onmousedown="selectSearchResult(${i})"
            style="padding:0.5rem 1rem; cursor:pointer; font-size:0.88rem; border-bottom:1px solid var(--border); transition:background 0.1s;"
            onmouseenter="this.style.background='var(--azure-light)'" onmouseleave="this.style.background=searchHighlightIdx===${i}?'var(--azure-light)':''">
            <strong>${highlightMatch(m.sku, query)}</strong>
            <span style="color:var(--text-secondary); margin-left:0.5rem; font-size:0.8rem;">${m.data.vcpus} vCPU \u00b7 ${m.data.mem} GiB \u00b7 ${m.purpose} \u00b7 ${m.series}</span>
        </div>`
    ).join('');
    container.style.display = 'block';

    const exact = searchMatches.findIndex(m => m.sku.toLowerCase() === query);
    if (exact !== -1) {
        searchHighlightIdx = exact;
        btn.disabled = false;
        highlightSearchItem(exact);
    } else {
        btn.disabled = true;
    }
}

function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.substring(0, idx)) +
        '<span style="background:#fff3cd; font-weight:700;">' + escapeHtml(text.substring(idx, idx + query.length)) + '</span>' +
        escapeHtml(text.substring(idx + query.length));
}

function highlightSearchItem(idx) {
    const items = document.querySelectorAll('.search-result-item');
    items.forEach((el, i) => {
        el.style.background = i === idx ? 'var(--azure-light)' : '';
    });
    if (items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
}

function onVmSearchKeydown(e) {
    if (searchMatches.length === 0) return;
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchHighlightIdx = Math.min(searchHighlightIdx + 1, searchMatches.length - 1);
        highlightSearchItem(searchHighlightIdx);
        document.getElementById('vmSearchBtn').disabled = false;
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchHighlightIdx = Math.max(searchHighlightIdx - 1, 0);
        highlightSearchItem(searchHighlightIdx);
        document.getElementById('vmSearchBtn').disabled = false;
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchHighlightIdx >= 0) {
            selectSearchResult(searchHighlightIdx);
            applySearchSelection();
        } else if (searchMatches.length === 1) {
            selectSearchResult(0);
            applySearchSelection();
        }
    } else if (e.key === 'Escape') {
        hideSearchResults();
    }
}

function selectSearchResult(idx) {
    const match = searchMatches[idx];
    if (!match) return;
    searchHighlightIdx = idx;
    document.getElementById('vmSearchInput').value = match.sku;
    document.getElementById('vmSearchBtn').disabled = false;
    highlightSearchItem(idx);
}

function applySearchSelection() {
    if (searchHighlightIdx < 0 || !searchMatches[searchHighlightIdx]) return;
    const match = searchMatches[searchHighlightIdx];
    hideSearchResults();

    const purposeSel = document.getElementById('vmPurpose');
    purposeSel.value = match.purpose;
    onPurposeChange();

    const family = getFamilyPrefix(match.series);
    document.getElementById('vmFamily').value = family;
    onFamilyChange();

    document.getElementById('vmSeries').value = match.series;
    onSeriesChange();

    document.getElementById('vmSku').value = match.sku;
    onSkuChange();
}

function hideSearchResults() {
    document.getElementById('vmSearchResults').style.display = 'none';
}

// ==================== BURSTABLE B-SERIES CALCULATOR ====================
const BURST_BASE = {
    "B2ts_v2":  { vcpus:2,  mem:1,   basePct:20, initCredits:60,  creditsPerHour:24,  maxBanked:576   },
    "B2ls_v2":  { vcpus:2,  mem:4,   basePct:30, initCredits:60,  creditsPerHour:36,  maxBanked:864   },
    "B2s_v2":   { vcpus:2,  mem:8,   basePct:40, initCredits:60,  creditsPerHour:48,  maxBanked:1152  },
    "B4ls_v2":  { vcpus:4,  mem:8,   basePct:30, initCredits:120, creditsPerHour:72,  maxBanked:1728  },
    "B4s_v2":   { vcpus:4,  mem:16,  basePct:40, initCredits:120, creditsPerHour:96,  maxBanked:2304  },
    "B8ls_v2":  { vcpus:8,  mem:16,  basePct:30, initCredits:240, creditsPerHour:144, maxBanked:3456  },
    "B8s_v2":   { vcpus:8,  mem:32,  basePct:40, initCredits:240, creditsPerHour:192, maxBanked:4608  },
    "B16ls_v2": { vcpus:16, mem:32,  basePct:30, initCredits:480, creditsPerHour:288, maxBanked:6912  },
    "B16s_v2":  { vcpus:16, mem:64,  basePct:40, initCredits:480, creditsPerHour:384, maxBanked:9216  },
    "B32ls_v2": { vcpus:32, mem:64,  basePct:30, initCredits:960, creditsPerHour:576, maxBanked:13824 },
    "B32s_v2":  { vcpus:32, mem:128, basePct:40, initCredits:960, creditsPerHour:768, maxBanked:18432 }
};

function buildBurstSkuTable() {
    const all = {};
    Object.keys(BURST_BASE).forEach(suffix => {
        all["Standard_" + suffix] = Object.assign({ family:"Bsv2" }, BURST_BASE[suffix]);
        const m = suffix.match(/^B(\d+)(t|l|tl)?s_v2$/);
        if (m) {
            const num = m[1];
            const mid = m[2] || "";
            const basv2Sku = "Standard_B" + num + mid + "as_v2";
            const bpsv2Sku = "Standard_B" + num + mid + "ps_v2";
            all[basv2Sku] = Object.assign({ family:"Basv2" }, BURST_BASE[suffix]);
            if (BURST_BASE[suffix].vcpus <= 16) {
                all[bpsv2Sku] = Object.assign({ family:"Bpsv2" }, BURST_BASE[suffix]);
            }
        }
    });
    return all;
}
const BURST_SKUS = buildBurstSkuTable();

function initBurstableTab() {
    const sel = document.getElementById('burstSku');
    if (!sel) return;
    const byFamily = { "Bsv2":[], "Basv2":[], "Bpsv2":[] };
    Object.keys(BURST_SKUS).forEach(k => byFamily[BURST_SKUS[k].family].push(k));
    Object.keys(byFamily).forEach(fam => {
        const og = document.createElement('optgroup');
        og.label = fam;
        byFamily[fam].sort((a,b) => BURST_SKUS[a].vcpus - BURST_SKUS[b].vcpus || a.localeCompare(b));
        byFamily[fam].forEach(sku => {
            const o = document.createElement('option');
            o.value = sku; o.textContent = sku;
            og.appendChild(o);
        });
        sel.appendChild(og);
    });

    const groupsContainer = document.getElementById('burstRefGroups');
    if (groupsContainer) {
        const famLabels = {
            "Bsv2":  "Bsv2 (Intel)",
            "Basv2": "Basv2 (AMD)",
            "Bpsv2": "Bpsv2 (Arm/Cobalt)"
        };
        ["Bsv2","Basv2","Bpsv2"].forEach(fam => {
            const skus = Object.keys(BURST_SKUS)
                .filter(k => BURST_SKUS[k].family === fam)
                .sort((a,b) => BURST_SKUS[a].vcpus - BURST_SKUS[b].vcpus || a.localeCompare(b));
            const details = document.createElement('details');
            details.className = 'burst-fam-group';
            const rows = skus.map(sku => {
                const d = BURST_SKUS[sku];
                return `<tr><td>${sku}</td><td>${d.vcpus}</td><td>${d.mem}</td><td>${d.basePct}%</td><td>${d.initCredits}</td><td>${d.creditsPerHour}</td><td>${d.maxBanked}</td></tr>`;
            }).join('');
            details.innerHTML =
                `<summary><span>${famLabels[fam]}<span class="burst-fam-label">${skus.length === 1 ? '1 SKU' : skus.length + ' SKUs'}</span></span></summary>` +
                `<div style="overflow-x:auto; padding:0.4rem 0.6rem 0.6rem;">` +
                    `<table class="burst-fam-table"><thead><tr><th>VM Size</th><th>vCPUs</th><th>Memory (GB)</th><th>Base CPU %</th><th>Initial Credits</th><th>Credits/hr (idle)</th><th>Max Banked</th></tr></thead><tbody>${rows}</tbody></table>` +
                `</div>`;
            groupsContainer.appendChild(details);
        });
    }

    sel.value = "Standard_B2ts_v2";
    onBurstSkuChange();
}

function onBurstSkuChange() {
    const sku = document.getElementById('burstSku').value;
    const baseEl = document.getElementById('burstBaseCpu');
    const vcpuEl = document.getElementById('burstVcpus');
    const detailsEl = document.getElementById('burstSkuDetails');
    if (!sku || !BURST_SKUS[sku]) {
        baseEl.value = ''; vcpuEl.value = '';
        detailsEl.style.display = 'none';
        document.getElementById('burstCreditsMin').textContent = '\u2014';
        document.getElementById('burstCreditsHour').textContent = '\u2014';
        document.getElementById('burstCreditsDay').textContent = '\u2014';
        return;
    }
    const d = BURST_SKUS[sku];
    baseEl.value = d.basePct;
    vcpuEl.value = d.vcpus;
    document.getElementById('burstDetName').textContent = sku;
    document.getElementById('burstDetVcpus').textContent = d.vcpus;
    document.getElementById('burstDetMem').textContent = d.mem;
    document.getElementById('burstDetBase').textContent = d.basePct + '%';
    document.getElementById('burstDetInit').textContent = d.initCredits;
    document.getElementById('burstDetCredHr').textContent = d.creditsPerHour;
    document.getElementById('burstDetMax').textContent = d.maxBanked;
    detailsEl.style.display = 'block';
    onBurstUsageChange();
}

function onBurstUsageChange() {
    const sku = document.getElementById('burstSku').value;
    if (!sku || !BURST_SKUS[sku]) return;
    const d = BURST_SKUS[sku];
    let usage = parseFloat(document.getElementById('burstUsageCpu').value);
    if (isNaN(usage)) usage = 0;
    if (usage < 0) usage = 0;
    if (usage > 100) usage = 100;
    const perMin  = ((d.basePct * d.vcpus) - (usage * d.vcpus)) / 100;
    const perHour = perMin * 60;
    const perDay  = perHour * 24;
    const fmt = (v) => (Math.round(v * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 });
    const color = (v) => v < 0 ? '#a4262c' : (v > 0 ? '#107c10' : 'var(--text)');
    const minEl  = document.getElementById('burstCreditsMin');
    const hourEl = document.getElementById('burstCreditsHour');
    const dayEl  = document.getElementById('burstCreditsDay');
    minEl.textContent  = fmt(perMin);  minEl.style.color  = color(perMin);
    hourEl.textContent = fmt(perHour); hourEl.style.color = color(perHour);
    dayEl.textContent  = fmt(perDay);  dayEl.style.color  = color(perDay);
    updateBurstCreditChart(sku, usage);
}

// ==================== BURST CREDIT CHART ====================
let burstCreditChart = null;

function updateBurstCreditChart(skuName, usagePct) {
    const d = BURST_SKUS[skuName];
    if (!d) return;
    const netPerMin = ((d.basePct * d.vcpus) - (usagePct * d.vcpus)) / 100;

    const labels = [];
    const data = [];
    let balance = d.initCredits;

    for (let mins = 0; mins <= 240; mins += 15) {
        const hours = mins / 60;
        labels.push(hours % 1 === 0 ? hours + 'h' : hours.toFixed(2) + 'h');
        if (mins > 0) {
            balance += netPerMin * 15;
            balance = Math.max(0, Math.min(d.maxBanked, balance));
        }
        data.push(Math.round(balance * 100) / 100);
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    const textColor = isDark ? '#d4d4d4' : undefined;
    const pointColors = data.map(v => v === 0 ? '#a4262c' : '#0078d4');

    const ctx = document.getElementById('burstCreditChart');
    if (!ctx) return;

    if (burstCreditChart) burstCreditChart.destroy();

    burstCreditChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Credit Balance',
                data: data,
                borderColor: '#0078d4',
                backgroundColor: 'rgba(0,120,212,0.08)',
                borderWidth: 2.5,
                pointRadius: 5,
                pointBackgroundColor: pointColors,
                pointBorderColor: pointColors,
                pointHoverRadius: 7,
                fill: true,
                tension: 0.3,
                segment: {
                    borderColor: function(ctx) {
                        return ctx.p1.parsed.y === 0 ? '#a4262c' : '#0078d4';
                    },
                    backgroundColor: function(ctx) {
                        return ctx.p1.parsed.y === 0 ? 'rgba(164,38,44,0.05)' : 'rgba(0,120,212,0.08)';
                    }
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    titleFont: { size: 13 },
                    bodyFont: { size: 12, family: "'Consolas', monospace" },
                    padding: 10,
                    cornerRadius: 6,
                    callbacks: {
                        title: function(items) { return 'Time: ' + items[0].label; },
                        label: function(item) {
                            const credits = item.parsed.y;
                            if (credits === 0) return 'Credits: 0  \u26A0 THROTTLED';
                            return 'Credits: ' + credits.toLocaleString();
                        },
                        afterLabel: function(item) {
                            if (item.parsed.y === 0) return 'VM limited to ' + d.basePct + '% CPU';
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Time (hours)', font: { weight: 'bold', size: 13 }, color: textColor },
                    grid: { color: gridColor },
                    ticks: { color: textColor }
                },
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Available Credits', font: { weight: 'bold', size: 13 }, color: textColor },
                    grid: { color: gridColor },
                    ticks: { color: textColor }
                }
            }
        }
    });
}

// ==================== INIT ====================
initTheme();
initPurposeDropdown();
initBurstableTab();
autoLoad();
