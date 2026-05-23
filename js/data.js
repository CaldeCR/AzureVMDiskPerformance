// ==================== AUTO-EXTRACTED DATA ====================
// Source: AzureVM and Disk Performance Limits v2.html
// Do not edit manually — regenerate from source if needed
// ==================== DISK DATA ====================
const DISK_SKUS = {
    "Premium SSD": {
        "P4 (32 GiB)":   {iops:120,   mbps:25,  size:32,    iopsBurst:3500, mbpsBurst:170},
        "P6 (64 GiB)":   {iops:240,   mbps:50,  size:64,    iopsBurst:3500, mbpsBurst:170},
        "P10 (128 GiB)": {iops:500,   mbps:100, size:128,   iopsBurst:3500, mbpsBurst:170},
        "P15 (256 GiB)": {iops:1100,  mbps:125, size:256,   iopsBurst:3500, mbpsBurst:170},
        "P20 (512 GiB)": {iops:2300,  mbps:150, size:512,   iopsBurst:3500, mbpsBurst:170},
        "P30 (1 TiB)":   {iops:5000,  mbps:200, size:1024},
        "P40 (2 TiB)":   {iops:7500,  mbps:250, size:2048},
        "P50 (4 TiB)":   {iops:7500,  mbps:250, size:4096},
        "P60 (8 TiB)":   {iops:16000, mbps:500, size:8192},
        "P70 (16 TiB)":  {iops:18000, mbps:750, size:16384},
        "P80 (32 TiB)":  {iops:20000, mbps:900, size:32767}
    },
    "Standard SSD": {
        "E4 (32 GiB)":   {iops:500,  mbps:100, size:32},
        "E6 (64 GiB)":   {iops:500,  mbps:100, size:64},
        "E10 (128 GiB)": {iops:500,  mbps:100, size:128},
        "E15 (256 GiB)": {iops:500,  mbps:100, size:256},
        "E20 (512 GiB)": {iops:500,  mbps:100, size:512},
        "E30 (1 TiB)":   {iops:500,  mbps:100, size:1024},
        "E40 (2 TiB)":   {iops:500,  mbps:100, size:2048},
        "E50 (4 TiB)":   {iops:500,  mbps:100, size:4096},
        "E60 (8 TiB)":   {iops:2000, mbps:400, size:8192},
        "E70 (16 TiB)":  {iops:4000, mbps:600, size:16384},
        "E80 (32 TiB)":  {iops:6000, mbps:750, size:32767}
    },
    "Standard HDD": {
        "S4 (32 GiB)":   {iops:500,  mbps:60, size:32},
        "S6 (64 GiB)":   {iops:500,  mbps:60, size:64},
        "S10 (128 GiB)": {iops:500,  mbps:60, size:128},
        "S15 (256 GiB)": {iops:500,  mbps:60, size:256},
        "S20 (512 GiB)": {iops:500,  mbps:60, size:512},
        "S30 (1 TiB)":   {iops:500,  mbps:60, size:1024},
        "S40 (2 TiB)":   {iops:500,  mbps:60, size:2048},
        "S50 (4 TiB)":   {iops:500,  mbps:60, size:4096},
        "S60 (8 TiB)":   {iops:1300, mbps:300, size:8192},
        "S70 (16 TiB)":  {iops:2000, mbps:500, size:16384},
        "S80 (32 TiB)":  {iops:2000, mbps:500, size:32767}
    },
    "Premium SSD v2": {
        "Custom": {iops:3000, mbps:125, size:0}
    },
    "Ultra Disk": {
        "Custom": {iops:1000, mbps:250, size:0}
    }
};

// ==================== VM DATA ====================
// Organized by Purpose > Series > SKU
// Data sourced from https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview
const VM_DATA = {
    "General Purpose": {
        "Dsv3": {
            "Standard_D2s_v3":  {vcpus:2,  mem:8,   maxDisks:4,  cachedIops:4000,   cachedMbps:32,   uncachedIops:3200,  uncachedMbps:48},
            "Standard_D4s_v3":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:8000,   cachedMbps:64,   uncachedIops:6400,  uncachedMbps:96},
            "Standard_D8s_v3":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:16000,  cachedMbps:128,  uncachedIops:12800, uncachedMbps:192},
            "Standard_D16s_v3": {vcpus:16, mem:64,  maxDisks:32, cachedIops:32000,  cachedMbps:256,  uncachedIops:25600, uncachedMbps:384},
            "Standard_D32s_v3": {vcpus:32, mem:128, maxDisks:32, cachedIops:64000,  cachedMbps:512,  uncachedIops:51200, uncachedMbps:768},
            "Standard_D48s_v3": {vcpus:48, mem:192, maxDisks:32, cachedIops:96000,  cachedMbps:768,  uncachedIops:76800, uncachedMbps:1152},
            "Standard_D64s_v3": {vcpus:64, mem:256, maxDisks:32, cachedIops:128000, cachedMbps:1024, uncachedIops:80000, uncachedMbps:1200}
        },
        "Dsv5": {
            "Standard_D2s_v5":  {vcpus:2,  mem:8,   maxDisks:4,  cachedIops:0,     cachedMbps:0,   uncachedIops:3750,  uncachedMbps:85},
            "Standard_D4s_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:0,     cachedMbps:0,   uncachedIops:6400,  uncachedMbps:145},
            "Standard_D8s_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:0,     cachedMbps:0,   uncachedIops:12800, uncachedMbps:290},
            "Standard_D16s_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:0,     cachedMbps:0,   uncachedIops:25600, uncachedMbps:600},
            "Standard_D32s_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:0,     cachedMbps:0,   uncachedIops:51200, uncachedMbps:865},
            "Standard_D48s_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:0,     cachedMbps:0,   uncachedIops:76800, uncachedMbps:1315},
            "Standard_D64s_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:0,     cachedMbps:0,   uncachedIops:80000, uncachedMbps:1735}
        },
        "Ddsv5": {
            "Standard_D2ds_v5":  {vcpus:2,  mem:8,   maxDisks:4,  cachedIops:9000,   cachedMbps:125,  uncachedIops:3750,  uncachedMbps:85},
            "Standard_D4ds_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:19000,  cachedMbps:250,  uncachedIops:6400,  uncachedMbps:145},
            "Standard_D8ds_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:38000,  cachedMbps:500,  uncachedIops:12800, uncachedMbps:290},
            "Standard_D16ds_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:75000,  cachedMbps:1000, uncachedIops:25600, uncachedMbps:600},
            "Standard_D32ds_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:150000, cachedMbps:2000, uncachedIops:51200, uncachedMbps:865},
            "Standard_D48ds_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:225000, cachedMbps:3000, uncachedIops:76800, uncachedMbps:1315},
            "Standard_D64ds_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:300000, cachedMbps:4000, uncachedIops:80000, uncachedMbps:1735}
        },
        "Dasv5": {
            "Standard_D2as_v5":  {vcpus:2,  mem:8,   maxDisks:4,  cachedIops:0,  cachedMbps:0,  uncachedIops:3750,  uncachedMbps:82},
            "Standard_D4as_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:0,  cachedMbps:0,  uncachedIops:6400,  uncachedMbps:144},
            "Standard_D8as_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:0,  cachedMbps:0,  uncachedIops:12800, uncachedMbps:200},
            "Standard_D16as_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:25600, uncachedMbps:384},
            "Standard_D32as_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:51200, uncachedMbps:768},
            "Standard_D48as_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:76800, uncachedMbps:1148},
            "Standard_D64as_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:80000, uncachedMbps:1200}
        },
        "Av2": {
            // New schema: local/remote sub-objects sourced from MS Learn av2-series.md.
            // local=null means SKU has no temp disk; remote=null means no managed disk support.
            // Av2 doc lists "Uncached Premium SSD IOPS" only — no MBps column — so uncachedMbpsPremium is null.
            "Standard_A1_v2":  {vcpus:1,  mem:2,  local:{maxTempDisks:1, tempDiskGiB:10, tempIopsRR:1000, tempMbpsRR:20,  tempMbpsRW:10}, remote:{maxDataDisks:2,  uncachedIopsPremium:1000, uncachedMbpsPremium:null}},
            "Standard_A2_v2":  {vcpus:2,  mem:4,  local:{maxTempDisks:1, tempDiskGiB:20, tempIopsRR:2000, tempMbpsRR:40,  tempMbpsRW:20}, remote:{maxDataDisks:4,  uncachedIopsPremium:2000, uncachedMbpsPremium:null}},
            "Standard_A4_v2":  {vcpus:4,  mem:8,  local:{maxTempDisks:1, tempDiskGiB:40, tempIopsRR:4000, tempMbpsRR:80,  tempMbpsRW:40}, remote:{maxDataDisks:8,  uncachedIopsPremium:4000, uncachedMbpsPremium:null}},
            "Standard_A8_v2":  {vcpus:8,  mem:16, local:{maxTempDisks:1, tempDiskGiB:80, tempIopsRR:8000, tempMbpsRR:160, tempMbpsRW:80}, remote:{maxDataDisks:16, uncachedIopsPremium:8000, uncachedMbpsPremium:null}},
            "Standard_A2m_v2": {vcpus:2,  mem:16, local:{maxTempDisks:1, tempDiskGiB:20, tempIopsRR:2000, tempMbpsRR:40,  tempMbpsRW:20}, remote:{maxDataDisks:4,  uncachedIopsPremium:2000, uncachedMbpsPremium:null}},
            "Standard_A4m_v2": {vcpus:4,  mem:32, local:{maxTempDisks:1, tempDiskGiB:40, tempIopsRR:4000, tempMbpsRR:80,  tempMbpsRW:40}, remote:{maxDataDisks:8,  uncachedIopsPremium:4000, uncachedMbpsPremium:null}},
            "Standard_A8m_v2": {vcpus:8,  mem:64, local:{maxTempDisks:1, tempDiskGiB:80, tempIopsRR:8000, tempMbpsRR:160, tempMbpsRW:80}, remote:{maxDataDisks:16, uncachedIopsPremium:8000, uncachedMbpsPremium:null}}
        },
        "Bsv2": {
            "Standard_B2ts_v2": {vcpus:2,  mem:1,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B2ls_v2": {vcpus:2,  mem:4,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B2s_v2":  {vcpus:2,  mem:8,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B4ls_v2": {vcpus:4,  mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:6400,  uncachedMbpsPremium:145, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B4s_v2":  {vcpus:4,  mem:16,  local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:6400,  uncachedMbpsPremium:145, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B8ls_v2": {vcpus:8,  mem:16,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:12800, uncachedMbpsPremium:290, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B8s_v2":  {vcpus:8,  mem:32,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:12800, uncachedMbpsPremium:290, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B16ls_v2":{vcpus:16, mem:32,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:960}},
            "Standard_B16s_v2": {vcpus:16, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:960}},
            "Standard_B32ls_v2":{vcpus:32, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:51200, uncachedMbpsPremium:600, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:960}},
            "Standard_B32s_v2": {vcpus:32, mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:51200, uncachedMbpsPremium:600, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:960}}
        },
        "Basv2": {
            "Standard_B2ats_v2":  {vcpus:2,  mem:1,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B2als_v2":  {vcpus:2,  mem:4,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B2as_v2":   {vcpus:2,  mem:8,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B4als_v2":  {vcpus:4,  mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:6400,  uncachedMbpsPremium:145, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B4as_v2":   {vcpus:4,  mem:16,  local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:6400,  uncachedMbpsPremium:145, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B8als_v2":  {vcpus:8,  mem:16,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:12800, uncachedMbpsPremium:290, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B8as_v2":   {vcpus:8,  mem:32,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:12800, uncachedMbpsPremium:290, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B16als_v2": {vcpus:16, mem:32,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:960}},
            "Standard_B16as_v2":  {vcpus:16, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:960}},
            "Standard_B32als_v2": {vcpus:32, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:960}},
            "Standard_B32as_v2":  {vcpus:32, mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:960}}
        },
        "Bpsv2": {
            "Standard_B2pts_v2":  {vcpus:2,  mem:1,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B2pls_v2":  {vcpus:2,  mem:4,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B2ps_v2":   {vcpus:2,  mem:8,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:3750,  uncachedMbpsPremium:85,  uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:960}},
            "Standard_B4pls_v2":  {vcpus:4,  mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:6400,  uncachedMbpsPremium:145, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B4ps_v2":   {vcpus:4,  mem:16,  local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:6400,  uncachedMbpsPremium:145, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B8pls_v2":  {vcpus:8,  mem:16,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:12800, uncachedMbpsPremium:290, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B8ps_v2":   {vcpus:8,  mem:32,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:12800, uncachedMbpsPremium:290, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:960}},
            "Standard_B16pls_v2": {vcpus:16, mem:32,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:960}},
            "Standard_B16ps_v2":  {vcpus:16, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:25600, uncachedMbpsPremium:600, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:960}}
        },
        "DCsv3": {
            "Standard_DC2s_v3":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:0, cachedMbps:0, uncachedIops:3200,  uncachedMbps:48},
            "Standard_DC4s_v3":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:96},
            "Standard_DC8s_v3":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_DC16s_v3": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_DC24s_v3": {vcpus:24, mem:192, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:38400, uncachedMbps:576},
            "Standard_DC32s_v3": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_DC48s_v3": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152}
        },
        "DCdsv3": {
            "Standard_DC2ds_v3":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:0, cachedMbps:0, uncachedIops:3200,  uncachedMbps:48},
            "Standard_DC4ds_v3":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:96},
            "Standard_DC8ds_v3":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_DC16ds_v3": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_DC24ds_v3": {vcpus:24, mem:192, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:38400, uncachedMbps:576},
            "Standard_DC32ds_v3": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_DC48ds_v3": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152}
        },
        // ===== DC-family v2 (Intel SGX, confidential computing) =====
        // Remote IOPS/MBps not published in official docs — TODO: confirm when available
        "DCsv2": {
            "Standard_DC1s_v2": {vcpus:1, mem:4,  maxDisks:1, cachedIops:0, cachedMbps:0, uncachedIops:0 /* TODO: confirm */, uncachedMbps:0 /* TODO: confirm */},
            "Standard_DC2s_v2": {vcpus:2, mem:8,  maxDisks:2, cachedIops:0, cachedMbps:0, uncachedIops:0 /* TODO: confirm */, uncachedMbps:0 /* TODO: confirm */},
            "Standard_DC4s_v2": {vcpus:4, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:0 /* TODO: confirm */, uncachedMbps:0 /* TODO: confirm */},
            "Standard_DC8_v2":  {vcpus:8, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:0 /* TODO: confirm */, uncachedMbps:0 /* TODO: confirm */}
        },
        // ===== DC-family v5 (AMD EPYC Milan, confidential computing) =====
        "DCasv5": {
            "Standard_DC2as_v5":  {vcpus:2,  mem:8,   maxDisks:4,  cachedIops:0, cachedMbps:0, uncachedIops:3750,  uncachedMbps:48},
            "Standard_DC4as_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:96},
            "Standard_DC8as_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_DC16as_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_DC32as_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_DC48as_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_DC64as_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_DC96as_v5": {vcpus:96, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "DCadsv5": {
            "Standard_DC2ads_v5":  {vcpus:2,  mem:8,   maxDisks:4,  cachedIops:0, cachedMbps:0, uncachedIops:3750,  uncachedMbps:48},
            "Standard_DC4ads_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:96},
            "Standard_DC8ads_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_DC16ads_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_DC32ads_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_DC48ads_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_DC64ads_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_DC96ads_v5": {vcpus:96, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        // ===== DC-family v5 CC (AMD EPYC Milan, confidential computing — community/preview) =====
        "DCasccv5": {
            "Standard_DC4as_cc_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:144},
            "Standard_DC8as_cc_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_DC16as_cc_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_DC32as_cc_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_DC48as_cc_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_DC64as_cc_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_DC96as_cc_v5": {vcpus:96, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1600}
        },
        "DCadsccv5": {
            "Standard_DC4ads_cc_v5":  {vcpus:4,  mem:16,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:144},
            "Standard_DC8ads_cc_v5":  {vcpus:8,  mem:32,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_DC16ads_cc_v5": {vcpus:16, mem:64,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_DC32ads_cc_v5": {vcpus:32, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_DC48ads_cc_v5": {vcpus:48, mem:192, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_DC64ads_cc_v5": {vcpus:64, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_DC96ads_cc_v5": {vcpus:96, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1600}
        },
        // ===== DC-family v6 (confidential computing) =====
        // AMD Genoa EPYC 9004 — per-SKU remote IOPS/MBps not yet published in official docs
        "DCasv6": {
            "Standard_DC2as_v6":  {vcpus:2,  mem:8,   local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC4as_v6":  {vcpus:4,  mem:16,  local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC8as_v6":  {vcpus:8,  mem:32,  local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC16as_v6": {vcpus:16, mem:64,  local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC32as_v6": {vcpus:32, mem:128, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC48as_v6": {vcpus:48, mem:192, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC64as_v6": {vcpus:64, mem:256, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC96as_v6": {vcpus:96, mem:384, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}}
        },
        "DCadsv6": {
            "Standard_DC2ads_v6":  {vcpus:2,  mem:8,   local:{maxTempDisks:1, tempDiskGiB:75,   tempIopsRR:9000,   tempMbpsRR:125},   remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC4ads_v6":  {vcpus:4,  mem:16,  local:{maxTempDisks:1, tempDiskGiB:150,  tempIopsRR:19000,  tempMbpsRR:250},   remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC8ads_v6":  {vcpus:8,  mem:32,  local:{maxTempDisks:1, tempDiskGiB:300,  tempIopsRR:38000,  tempMbpsRR:500},   remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC16ads_v6": {vcpus:16, mem:64,  local:{maxTempDisks:1, tempDiskGiB:600,  tempIopsRR:75000,  tempMbpsRR:1000},  remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC32ads_v6": {vcpus:32, mem:128, local:{maxTempDisks:1, tempDiskGiB:1200, tempIopsRR:150000, tempMbpsRR:2000},  remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC48ads_v6": {vcpus:48, mem:192, local:{maxTempDisks:1, tempDiskGiB:1800, tempIopsRR:225000, tempMbpsRR:3000},  remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC64ads_v6": {vcpus:64, mem:256, local:{maxTempDisks:1, tempDiskGiB:2400, tempIopsRR:300000, tempMbpsRR:4000},  remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC96ads_v6": {vcpus:96, mem:384, local:{maxTempDisks:1, tempDiskGiB:3600, tempIopsRR:450000, tempMbpsRR:4000},  remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}}
        },
        // Intel confidential v6
        "DCesv6": {
            "Standard_DC2es_v6":   {vcpus:2,   mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC4es_v6":   {vcpus:4,   mem:16,  local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC8es_v6":   {vcpus:8,   mem:32,  local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC16es_v6":  {vcpus:16,  mem:64,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC32es_v6":  {vcpus:32,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC48es_v6":  {vcpus:48,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC64es_v6":  {vcpus:64,  mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC96es_v6":  {vcpus:96,  mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:4000,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC128es_v6": {vcpus:128, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:4000,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}}
        },
        "DCedsv6": {
            "Standard_DC2eds_v6":   {vcpus:2,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180},   remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC4eds_v6":   {vcpus:4,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC8eds_v6":   {vcpus:8,   mem:32,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC16eds_v6":  {vcpus:16,  mem:64,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440},  remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC32eds_v6":  {vcpus:32,  mem:128, local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC48eds_v6":  {vcpus:48,  mem:192, local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC64eds_v6":  {vcpus:64,  mem:256, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC96eds_v6":  {vcpus:96,  mem:384, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:4000,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_DC128eds_v6": {vcpus:128, mem:512, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520}, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:4000,  uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}}
        },
        // ===== v7 D-family (sourced 2026-05 from MS Learn general-purpose docs) =====
        // Excludes "*generally available soon" sizes (D248/D372/D192-of-ls families) per current GA scope.
        // Schema: {local, remote} sub-objects feeding normalizeVm(); local=null for sizes with no temp disk.
        "Dsv7": {
            "Standard_D2s_v7":   {vcpus:2,   mem:8,    local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:115,   uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D4s_v7":   {vcpus:4,   mem:16,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:230,   uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D8s_v7":   {vcpus:8,   mem:32,   local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:460,   uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D16s_v7":  {vcpus:16,  mem:64,   local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:920,   uncachedIopsBurstPremium:75000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D32s_v7":  {vcpus:32,  mem:128,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1840,  uncachedIopsBurstPremium:100000, uncachedMbpsBurstPremium:1915}},
            "Standard_D48s_v7":  {vcpus:48,  mem:192,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2760,  uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:2875}},
            "Standard_D64s_v7":  {vcpus:64,  mem:256,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3680,  uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:3830}},
            "Standard_D96s_v7":  {vcpus:96,  mem:384,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5520,  uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:5745}},
            "Standard_D128s_v7": {vcpus:128, mem:512,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7360,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7660}},
            "Standard_D192s_v7": {vcpus:192, mem:768,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:307200, uncachedMbpsPremium:11040, uncachedIopsBurstPremium:350000, uncachedMbpsBurstPremium:12000}}
        },
        "Ddsv7": {
            "Standard_D2ds_v7":   {vcpus:2,   mem:8,    local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:50000,   tempMbpsRR:280,   tempIopsRW:25000,   tempMbpsRW:140},   remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:115,   uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D4ds_v7":   {vcpus:4,   mem:16,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:100000,  tempMbpsRR:560,   tempIopsRW:50000,   tempMbpsRW:280},   remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:230,   uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D8ds_v7":   {vcpus:8,   mem:32,   local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:200000,  tempMbpsRR:1120,  tempIopsRW:100000,  tempMbpsRW:560},   remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:460,   uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D16ds_v7":  {vcpus:16,  mem:64,   local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:400000,  tempMbpsRR:2240,  tempIopsRW:200000,  tempMbpsRW:1120},  remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:920,   uncachedIopsBurstPremium:75000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D32ds_v7":  {vcpus:32,  mem:128,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:800000,  tempMbpsRR:4480,  tempIopsRW:400000,  tempMbpsRW:2240},  remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1840,  uncachedIopsBurstPremium:100000, uncachedMbpsBurstPremium:1915}},
            "Standard_D48ds_v7":  {vcpus:48,  mem:192,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:1200000, tempMbpsRR:6720,  tempIopsRW:600000,  tempMbpsRW:3360},  remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2760,  uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:2875}},
            "Standard_D64ds_v7":  {vcpus:64,  mem:256,  local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1600000, tempMbpsRR:8960,  tempIopsRW:800000,  tempMbpsRW:4480},  remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3680,  uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:3830}},
            "Standard_D96ds_v7":  {vcpus:96,  mem:384,  local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:2400000, tempMbpsRR:13440, tempIopsRW:1200000, tempMbpsRW:6720},  remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5520,  uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:5745}},
            "Standard_D128ds_v7": {vcpus:128, mem:512,  local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:3200000, tempMbpsRR:17920, tempIopsRW:1600000, tempMbpsRW:8960},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7360,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7660}},
            "Standard_D192ds_v7": {vcpus:192, mem:768,  local:{maxTempDisks:6, tempDiskGiB:1760, tempIopsRR:4800000, tempMbpsRR:26880, tempIopsRW:2400000, tempMbpsRW:13440}, remote:{maxDataDisks:64, uncachedIopsPremium:307200, uncachedMbpsPremium:11040, uncachedIopsBurstPremium:350000, uncachedMbpsBurstPremium:12000}}
        },
        "Dlsv7": {
            "Standard_D2ls_v7":   {vcpus:2,   mem:4,   local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:115,  uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D4ls_v7":   {vcpus:4,   mem:8,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:230,  uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D8ls_v7":   {vcpus:8,   mem:16,  local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:460,  uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D16ls_v7":  {vcpus:16,  mem:32,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:920,  uncachedIopsBurstPremium:75000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D32ls_v7":  {vcpus:32,  mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1840, uncachedIopsBurstPremium:100000, uncachedMbpsBurstPremium:1915}},
            "Standard_D48ls_v7":  {vcpus:48,  mem:96,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2760, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:2875}},
            "Standard_D64ls_v7":  {vcpus:64,  mem:126, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3680, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:3830}},
            "Standard_D96ls_v7":  {vcpus:96,  mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5520, uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:5745}},
            "Standard_D128ls_v7": {vcpus:128, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7360, uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7660}}
        },
        "Dldsv7": {
            "Standard_D2lds_v7":   {vcpus:2,   mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:50000,   tempMbpsRR:280,   tempIopsRW:25000,   tempMbpsRW:140},  remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:115,  uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D4lds_v7":   {vcpus:4,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:100000,  tempMbpsRR:560,   tempIopsRW:50000,   tempMbpsRW:280},  remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:230,  uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D8lds_v7":   {vcpus:8,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:200000,  tempMbpsRR:1120,  tempIopsRW:100000,  tempMbpsRW:560},  remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:460,  uncachedIopsBurstPremium:45000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D16lds_v7":  {vcpus:16,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:400000,  tempMbpsRR:2240,  tempIopsRW:200000,  tempMbpsRW:1120}, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:920,  uncachedIopsBurstPremium:75000,  uncachedMbpsBurstPremium:1410}},
            "Standard_D32lds_v7":  {vcpus:32,  mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:800000,  tempMbpsRR:4480,  tempIopsRW:400000,  tempMbpsRW:2240}, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1840, uncachedIopsBurstPremium:100000, uncachedMbpsBurstPremium:1915}},
            "Standard_D48lds_v7":  {vcpus:48,  mem:96,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:1200000, tempMbpsRR:6720,  tempIopsRW:600000,  tempMbpsRW:3360}, remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2760, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:2875}},
            "Standard_D64lds_v7":  {vcpus:64,  mem:126, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1600000, tempMbpsRR:8960,  tempIopsRW:800000,  tempMbpsRW:4480}, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3680, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:3830}},
            "Standard_D96lds_v7":  {vcpus:96,  mem:384, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:2400000, tempMbpsRR:13440, tempIopsRW:1200000,tempMbpsRW:6720}, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5520, uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:5745}},
            "Standard_D128lds_v7": {vcpus:128, mem:256, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:3200000, tempMbpsRR:17920, tempIopsRW:1600000,tempMbpsRW:8960}, remote:{maxDataDisks:64, uncachedIopsPremium:204000, uncachedMbpsPremium:7360, uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7660}}
        },
        "Dasv7": {
            "Standard_D2as_v7":   {vcpus:2,   mem:8,   local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_D4as_v7":   {vcpus:4,   mem:16,  local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D8as_v7":   {vcpus:8,   mem:32,  local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D16as_v7":  {vcpus:16,  mem:64,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_D32as_v7":  {vcpus:32,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_D48as_v7":  {vcpus:48,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2808,  uncachedIopsBurstPremium:99000,  uncachedMbpsBurstPremium:2874}},
            "Standard_D64as_v7":  {vcpus:64,  mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_D96as_v7":  {vcpus:96,  mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_D128as_v7": {vcpus:128, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_D160as_v7": {vcpus:160, mem:640, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Dadsv7": {
            "Standard_D2ads_v7":   {vcpus:2,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:280,   tempIopsRW:15000,   tempMbpsRW:140},   remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_D4ads_v7":   {vcpus:4,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:560,   tempIopsRW:30000,   tempMbpsRW:280},   remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D8ads_v7":   {vcpus:8,   mem:32,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:1120,  tempIopsRW:60000,   tempMbpsRW:560},   remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D16ads_v7":  {vcpus:16,  mem:64,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:2240,  tempIopsRW:120000,  tempMbpsRW:1120},  remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_D32ads_v7":  {vcpus:32,  mem:128, local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:4480,  tempIopsRW:240000,  tempMbpsRW:2240},  remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_D48ads_v7":  {vcpus:48,  mem:192, local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:6720,  tempIopsRW:360000,  tempMbpsRW:3360},  remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2808,  uncachedIopsBurstPremium:99000,  uncachedMbpsBurstPremium:2874}},
            "Standard_D64ads_v7":  {vcpus:64,  mem:256, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:8960,  tempIopsRW:480000,  tempMbpsRW:4480},  remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_D96ads_v7":  {vcpus:96,  mem:384, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:13440, tempIopsRW:720000,  tempMbpsRW:6720},  remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_D128ads_v7": {vcpus:128, mem:512, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:17920, tempIopsRW:960000,  tempMbpsRW:8960},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_D160ads_v7": {vcpus:160, mem:640, local:{maxTempDisks:4, tempDiskGiB:2200, tempIopsRR:3000000, tempMbpsRR:22400, tempIopsRW:1200000, tempMbpsRW:11200}, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Dalsv7": {
            "Standard_D2als_v7":   {vcpus:2,   mem:4,   local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_D4als_v7":   {vcpus:4,   mem:8,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D8als_v7":   {vcpus:8,   mem:16,  local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D16als_v7":  {vcpus:16,  mem:32,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_D32als_v7":  {vcpus:32,  mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_D48als_v7":  {vcpus:48,  mem:96,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2808,  uncachedIopsBurstPremium:99000,  uncachedMbpsBurstPremium:2874}},
            "Standard_D64als_v7":  {vcpus:64,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_D96als_v7":  {vcpus:96,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_D128als_v7": {vcpus:128, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_D160als_v7": {vcpus:160, mem:320, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Daldsv7": {
            "Standard_D2alds_v7":   {vcpus:2,   mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:280,   tempIopsRW:15000,   tempMbpsRW:140},   remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_D4alds_v7":   {vcpus:4,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:560,   tempIopsRW:30000,   tempMbpsRW:280},   remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D8alds_v7":   {vcpus:8,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:1120,  tempIopsRW:60000,   tempMbpsRW:560},   remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_D16alds_v7":  {vcpus:16,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:2240,  tempIopsRW:120000,  tempMbpsRW:1120},  remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_D32alds_v7":  {vcpus:32,  mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:4480,  tempIopsRW:240000,  tempMbpsRW:2240},  remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_D48alds_v7":  {vcpus:48,  mem:96,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:6720,  tempIopsRW:360000,  tempMbpsRW:3360},  remote:{maxDataDisks:64, uncachedIopsPremium:96000,  uncachedMbpsPremium:2808,  uncachedIopsBurstPremium:99000,  uncachedMbpsBurstPremium:2874}},
            "Standard_D64alds_v7":  {vcpus:64,  mem:128, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:8960,  tempIopsRW:480000,  tempMbpsRW:4480},  remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_D96alds_v7":  {vcpus:96,  mem:192, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:13440, tempIopsRW:720000,  tempMbpsRW:6720},  remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_D128alds_v7": {vcpus:128, mem:256, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:17920, tempIopsRW:960000,  tempMbpsRW:8960},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_D160alds_v7": {vcpus:160, mem:320, local:{maxTempDisks:4, tempDiskGiB:2200, tempIopsRR:3000000, tempMbpsRR:22400, tempIopsRW:1200000, tempMbpsRW:11200}, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },

        // ===== v6 D-family (Intel Emerald Rapids + AMD Genoa EPYC 9004 + Cobalt 100 Arm64) =====
        // Schema: {local, remote} sub-objects feeding normalizeVm(); local=null for sizes with no temp disk.
        // Intel Emerald Rapids v6
        "Dsv6": {
            "Standard_D2s_v6":    {vcpus:2,   mem:8,    local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4s_v6":    {vcpus:4,   mem:16,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8s_v6":    {vcpus:8,   mem:32,   local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16s_v6":   {vcpus:16,  mem:64,   local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32s_v6":   {vcpus:32,  mem:128,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48s_v6":   {vcpus:48,  mem:192,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64s_v6":   {vcpus:64,  mem:256,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96s_v6":   {vcpus:96,  mem:384,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128s_v6":  {vcpus:128, mem:512,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}},
            "Standard_D192s_v6":  {vcpus:192, mem:768,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:260000, uncachedMbpsPremium:12000, uncachedIopsBurstPremium:260000, uncachedMbpsBurstPremium:12000}}
        },
        "Ddsv6": {
            "Standard_D2ds_v6":    {vcpus:2,   mem:8,    local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180,   tempIopsRW:15000,   tempMbpsRW:90},    remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4ds_v6":    {vcpus:4,   mem:16,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360,   tempIopsRW:30000,   tempMbpsRW:180},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8ds_v6":    {vcpus:8,   mem:32,   local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720,   tempIopsRW:60000,   tempMbpsRW:360},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16ds_v6":   {vcpus:16,  mem:64,   local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440,  tempIopsRW:120000,  tempMbpsRW:720},   remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32ds_v6":   {vcpus:32,  mem:128,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880,  tempIopsRW:240000,  tempMbpsRW:1440},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48ds_v6":   {vcpus:48,  mem:192,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320,  tempIopsRW:360000,  tempMbpsRW:2160},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64ds_v6":   {vcpus:64,  mem:256,  local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760,  tempIopsRW:480000,  tempMbpsRW:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96ds_v6":   {vcpus:96,  mem:384,  local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640,  tempIopsRW:720000,  tempMbpsRW:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128ds_v6":  {vcpus:128, mem:512,  local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000,  tempMbpsRW:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}},
            "Standard_D192ds_v6":  {vcpus:192, mem:768,  local:{maxTempDisks:6, tempDiskGiB:1760, tempIopsRR:3600000, tempMbpsRR:17280, tempIopsRW:1440000, tempMbpsRW:8640},  remote:{maxDataDisks:64, uncachedIopsPremium:260000, uncachedMbpsPremium:12000, uncachedIopsBurstPremium:260000, uncachedMbpsBurstPremium:12000}}
        },
        "Dlsv6": {
            "Standard_D2ls_v6":    {vcpus:2,   mem:4,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4ls_v6":    {vcpus:4,   mem:8,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8ls_v6":    {vcpus:8,   mem:16,  local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16ls_v6":   {vcpus:16,  mem:32,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32ls_v6":   {vcpus:32,  mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48ls_v6":   {vcpus:48,  mem:96,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64ls_v6":   {vcpus:64,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96ls_v6":   {vcpus:96,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128ls_v6":  {vcpus:128, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        "Dldsv6": {
            "Standard_D2lds_v6":    {vcpus:2,   mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180,   tempIopsRW:15000,   tempMbpsRW:90},    remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4lds_v6":    {vcpus:4,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360,   tempIopsRW:30000,   tempMbpsRW:180},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8lds_v6":    {vcpus:8,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720,   tempIopsRW:60000,   tempMbpsRW:360},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16lds_v6":   {vcpus:16,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440,  tempIopsRW:120000,  tempMbpsRW:720},   remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32lds_v6":   {vcpus:32,  mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880,  tempIopsRW:240000,  tempMbpsRW:1440},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48lds_v6":   {vcpus:48,  mem:96,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320,  tempIopsRW:360000,  tempMbpsRW:2160},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64lds_v6":   {vcpus:64,  mem:128, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760,  tempIopsRW:480000,  tempMbpsRW:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96lds_v6":   {vcpus:96,  mem:192, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640,  tempIopsRW:720000,  tempMbpsRW:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128lds_v6":  {vcpus:128, mem:256, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000,  tempMbpsRW:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        // AMD Genoa EPYC 9004 v6
        "Dasv6": {
            "Standard_D2as_v6":    {vcpus:2,   mem:8,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4as_v6":    {vcpus:4,   mem:16,  local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8as_v6":    {vcpus:8,   mem:32,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16as_v6":   {vcpus:16,  mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32as_v6":   {vcpus:32,  mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1700}},
            "Standard_D48as_v6":   {vcpus:48,  mem:192, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:90000,  uncachedMbpsBurstPremium:2550}},
            "Standard_D64as_v6":   {vcpus:64,  mem:256, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_D96as_v6":   {vcpus:96,  mem:384, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:175000, uncachedMbpsPremium:4320,  uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        "Dadsv6": {
            "Standard_D2ads_v6":   {vcpus:2,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180},   remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4ads_v6":   {vcpus:4,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360},   remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8ads_v6":   {vcpus:8,   mem:32,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720},   remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16ads_v6":  {vcpus:16,  mem:64,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440},  remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32ads_v6":  {vcpus:32,  mem:128, local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880},  remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1700}},
            "Standard_D48ads_v6":  {vcpus:48,  mem:192, local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320},  remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:90000,  uncachedMbpsBurstPremium:2550}},
            "Standard_D64ads_v6":  {vcpus:64,  mem:256, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760},  remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_D96ads_v6":  {vcpus:96,  mem:384, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640},  remote:{maxDataDisks:32, uncachedIopsPremium:175000, uncachedMbpsPremium:4320,  uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        "Dalsv6": {
            "Standard_D2als_v6":   {vcpus:2,   mem:4,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4als_v6":   {vcpus:4,   mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8als_v6":   {vcpus:8,   mem:16,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16als_v6":  {vcpus:16,  mem:32,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32als_v6":  {vcpus:32,  mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1700}},
            "Standard_D48als_v6":  {vcpus:48,  mem:96,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:90000,  uncachedMbpsBurstPremium:2550}},
            "Standard_D64als_v6":  {vcpus:64,  mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_D96als_v6":  {vcpus:96,  mem:192, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:175000, uncachedMbpsPremium:4320,  uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        "Daldsv6": {
            "Standard_D2alds_v6":  {vcpus:2,   mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180},   remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4alds_v6":  {vcpus:4,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360},   remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8alds_v6":  {vcpus:8,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720},   remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16alds_v6": {vcpus:16,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440},  remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32alds_v6": {vcpus:32,  mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880},  remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1700}},
            "Standard_D48alds_v6": {vcpus:48,  mem:96,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320},  remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:90000,  uncachedMbpsBurstPremium:2550}},
            "Standard_D64alds_v6": {vcpus:64,  mem:128, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760},  remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_D96alds_v6": {vcpus:96,  mem:192, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640},  remote:{maxDataDisks:32, uncachedIopsPremium:175000, uncachedMbpsPremium:4320,  uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        // Cobalt 100 Arm64 v6
        "Dpsv6": {
            "Standard_D2ps_v6":    {vcpus:2,   mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:10000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4ps_v6":    {vcpus:4,   mem:16,  local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8ps_v6":    {vcpus:8,   mem:32,  local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16ps_v6":   {vcpus:16,  mem:64,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32ps_v6":   {vcpus:32,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2000}},
            "Standard_D48ps_v6":   {vcpus:48,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:3000}},
            "Standard_D64ps_v6":   {vcpus:64,  mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96ps_v6":   {vcpus:96,  mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5000,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5000}}
        },
        "Dpdsv6": {
            "Standard_D2pds_v6":   {vcpus:2,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:90,    tempIopsRW:15000,   tempMbpsRW:180},   remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:10000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4pds_v6":   {vcpus:4,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:180,   tempIopsRW:30000,   tempMbpsRW:360},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8pds_v6":   {vcpus:8,   mem:32,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:360,   tempIopsRW:60000,   tempMbpsRW:720},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16pds_v6":  {vcpus:16,  mem:64,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:720,   tempIopsRW:120000,  tempMbpsRW:1440},  remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32pds_v6":  {vcpus:32,  mem:128, local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:1440,  tempIopsRW:240000,  tempMbpsRW:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2000}},
            "Standard_D48pds_v6":  {vcpus:48,  mem:192, local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:2160,  tempIopsRW:360000,  tempMbpsRW:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:3000}},
            "Standard_D64pds_v6":  {vcpus:64,  mem:256, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:2880,  tempIopsRW:480000,  tempMbpsRW:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96pds_v6":  {vcpus:96,  mem:384, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:4320,  tempIopsRW:720000,  tempMbpsRW:8640},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5000,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5000}}
        },
        "Dplsv6": {
            "Standard_D2pls_v6":   {vcpus:2,   mem:4,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:10000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4pls_v6":   {vcpus:4,   mem:8,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8pls_v6":   {vcpus:8,   mem:16,  local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16pls_v6":  {vcpus:16,  mem:32,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32pls_v6":  {vcpus:32,  mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2000}},
            "Standard_D48pls_v6":  {vcpus:48,  mem:96,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:3000}},
            "Standard_D64pls_v6":  {vcpus:64,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96pls_v6":  {vcpus:96,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5000,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5000}}
        },
        "Dpldsv6": {
            "Standard_D2plds_v6":  {vcpus:2,   mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:90,    tempIopsRW:15000,   tempMbpsRW:180},   remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:10000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4plds_v6":  {vcpus:4,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:180,   tempIopsRW:30000,   tempMbpsRW:360},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8plds_v6":  {vcpus:8,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:360,   tempIopsRW:60000,   tempMbpsRW:720},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16plds_v6": {vcpus:16,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:720,   tempIopsRW:120000,  tempMbpsRW:1440},  remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32plds_v6": {vcpus:32,  mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:1440,  tempIopsRW:240000,  tempMbpsRW:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2000}},
            "Standard_D48plds_v6": {vcpus:48,  mem:96,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:2160,  tempIopsRW:360000,  tempMbpsRW:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:3000}},
            "Standard_D64plds_v6": {vcpus:64,  mem:128, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:2880,  tempIopsRW:480000,  tempMbpsRW:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96plds_v6": {vcpus:96,  mem:192, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:4320,  tempIopsRW:720000,  tempMbpsRW:8640},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5000,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5000}}
        },
        // Network-optimized v6 (Intel Emerald Rapids, Preview)
        "Dndsv6": {
            "Standard_D2nds_v6":    {vcpus:2,   mem:8,    local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180,   tempIopsRW:15000,   tempMbpsRW:90},    remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4nds_v6":    {vcpus:4,   mem:16,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360,   tempIopsRW:30000,   tempMbpsRW:180},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8nds_v6":    {vcpus:8,   mem:32,   local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720,   tempIopsRW:60000,   tempMbpsRW:360},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16nds_v6":   {vcpus:16,  mem:64,   local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440,  tempIopsRW:120000,  tempMbpsRW:720},   remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32nds_v6":   {vcpus:32,  mem:128,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880,  tempIopsRW:240000,  tempMbpsRW:1440},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48nds_v6":   {vcpus:48,  mem:192,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320,  tempIopsRW:360000,  tempMbpsRW:2160},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64nds_v6":   {vcpus:64,  mem:256,  local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760,  tempIopsRW:480000,  tempMbpsRW:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96nds_v6":   {vcpus:96,  mem:384,  local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640,  tempIopsRW:720000,  tempMbpsRW:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128nds_v6":  {vcpus:128, mem:512,  local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000,  tempMbpsRW:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        "Dnlsv6": {
            "Standard_D2nls_v6":    {vcpus:2,   mem:4,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4nls_v6":    {vcpus:4,   mem:8,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8nls_v6":    {vcpus:8,   mem:16,  local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16nls_v6":   {vcpus:16,  mem:32,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32nls_v6":   {vcpus:32,  mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48nls_v6":   {vcpus:48,  mem:96,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64nls_v6":   {vcpus:64,  mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96nls_v6":   {vcpus:96,  mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128nls_v6":  {vcpus:128, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        "Dnldsv6": {
            "Standard_D2nlds_v6":   {vcpus:2,   mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180,   tempIopsRW:15000,   tempMbpsRW:90},    remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4nlds_v6":   {vcpus:4,   mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360,   tempIopsRW:30000,   tempMbpsRW:180},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8nlds_v6":   {vcpus:8,   mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720,   tempIopsRW:60000,   tempMbpsRW:360},   remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16nlds_v6":  {vcpus:16,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440,  tempIopsRW:120000,  tempMbpsRW:720},   remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32nlds_v6":  {vcpus:32,  mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880,  tempIopsRW:240000,  tempMbpsRW:1440},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48nlds_v6":  {vcpus:48,  mem:96,  local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320,  tempIopsRW:360000,  tempMbpsRW:2160},  remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64nlds_v6":  {vcpus:64,  mem:128, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760,  tempIopsRW:480000,  tempMbpsRW:2880},  remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96nlds_v6":  {vcpus:96,  mem:192, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640,  tempIopsRW:720000,  tempMbpsRW:4320},  remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128nlds_v6": {vcpus:128, mem:256, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000,  tempMbpsRW:5760},  remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        "Dnsv6": {
            "Standard_D2ns_v6":    {vcpus:2,   mem:8,    local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D4ns_v6":    {vcpus:4,   mem:16,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D8ns_v6":    {vcpus:8,   mem:32,   local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D16ns_v6":   {vcpus:16,  mem:64,   local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_D32ns_v6":   {vcpus:32,  mem:128,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_D48ns_v6":   {vcpus:48,  mem:192,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544,  uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_D64ns_v6":   {vcpus:64,  mem:256,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392,  uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_D96ns_v6":   {vcpus:96,  mem:384,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088,  uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_D128ns_v6":  {vcpus:128, mem:512,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782,  uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
    },
    "Memory Optimized": {
        "Esv3": {
            "Standard_E2s_v3":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:4000,   cachedMbps:32,   uncachedIops:3200,  uncachedMbps:48},
            "Standard_E4s_v3":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:8000,   cachedMbps:64,   uncachedIops:6400,  uncachedMbps:96},
            "Standard_E8s_v3":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:16000,  cachedMbps:128,  uncachedIops:12800, uncachedMbps:192},
            "Standard_E16s_v3": {vcpus:16, mem:128, maxDisks:32, cachedIops:32000,  cachedMbps:256,  uncachedIops:25600, uncachedMbps:384},
            "Standard_E20s_v3": {vcpus:20, mem:160, maxDisks:32, cachedIops:40000,  cachedMbps:320,  uncachedIops:32000, uncachedMbps:480},
            "Standard_E32s_v3": {vcpus:32, mem:256, maxDisks:32, cachedIops:64000,  cachedMbps:512,  uncachedIops:51200, uncachedMbps:768},
            "Standard_E48s_v3": {vcpus:48, mem:384, maxDisks:32, cachedIops:96000,  cachedMbps:768,  uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64s_v3": {vcpus:64, mem:432, maxDisks:32, cachedIops:128000, cachedMbps:1024, uncachedIops:80000, uncachedMbps:1200}
        },
        "Esv5": {
            "Standard_E2s_v5":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:0,  cachedMbps:0,  uncachedIops:3750,  uncachedMbps:85},
            "Standard_E4s_v5":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:0,  cachedMbps:0,  uncachedIops:6400,  uncachedMbps:145},
            "Standard_E8s_v5":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0,  cachedMbps:0,  uncachedIops:12800, uncachedMbps:290},
            "Standard_E16s_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:25600, uncachedMbps:600},
            "Standard_E32s_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:51200, uncachedMbps:865},
            "Standard_E48s_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:76800, uncachedMbps:1315},
            "Standard_E64s_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0,  cachedMbps:0,  uncachedIops:80000, uncachedMbps:1735}
        },
        "Edsv5": {
            "Standard_E2ds_v5":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:9000,   cachedMbps:125,  uncachedIops:3750,  uncachedMbps:85},
            "Standard_E4ds_v5":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:19000,  cachedMbps:250,  uncachedIops:6400,  uncachedMbps:145},
            "Standard_E8ds_v5":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:38000,  cachedMbps:500,  uncachedIops:12800, uncachedMbps:290},
            "Standard_E16ds_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:75000,  cachedMbps:1000, uncachedIops:25600, uncachedMbps:600},
            "Standard_E32ds_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:150000, cachedMbps:2000, uncachedIops:51200, uncachedMbps:865},
            "Standard_E48ds_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:225000, cachedMbps:3000, uncachedIops:76800, uncachedMbps:1315},
            "Standard_E64ds_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:300000, cachedMbps:4000, uncachedIops:80000, uncachedMbps:1735}
        },
        "Easv4": {
            "Standard_E2as_v4":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:0,  cachedMbps:0,  uncachedIops:3200,  uncachedMbps:48},
            "Standard_E4as_v4":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:0,  cachedMbps:0,  uncachedIops:6400,  uncachedMbps:96},
            "Standard_E8as_v4":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0,  cachedMbps:0,  uncachedIops:12800, uncachedMbps:192},
            "Standard_E16as_v4": {vcpus:16, mem:128, maxDisks:32, cachedIops:32000, cachedMbps:400, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20as_v4": {vcpus:20, mem:160, maxDisks:32, cachedIops:40000, cachedMbps:500, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32as_v4": {vcpus:32, mem:256, maxDisks:32, cachedIops:64000, cachedMbps:800, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48as_v4": {vcpus:48, mem:384, maxDisks:32, cachedIops:96000, cachedMbps:1200,uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64as_v4": {vcpus:64, mem:512, maxDisks:32, cachedIops:128000,cachedMbps:1600,uncachedIops:80000, uncachedMbps:1200},
            "Standard_E96as_v4": {vcpus:96, mem:672, maxDisks:32, cachedIops:192000,cachedMbps:2400,uncachedIops:80000, uncachedMbps:1200}
        },
        "Ebsv5": {
            "Standard_E2bs_v5":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:0,      cachedMbps:0,    uncachedIops:5500,   uncachedMbps:156},
            "Standard_E4bs_v5":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:0,      cachedMbps:0,    uncachedIops:11000,  uncachedMbps:312},
            "Standard_E8bs_v5":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0,      cachedMbps:0,    uncachedIops:22000,  uncachedMbps:625},
            "Standard_E16bs_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0,      cachedMbps:0,    uncachedIops:44000,  uncachedMbps:1250},
            "Standard_E32bs_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0,      cachedMbps:0,    uncachedIops:88000,  uncachedMbps:2500},
            "Standard_E48bs_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0,      cachedMbps:0,    uncachedIops:120000, uncachedMbps:4000},
            "Standard_E64bs_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0,      cachedMbps:0,    uncachedIops:120000, uncachedMbps:4000}
        },
        "Ebdsv5": {
            "Standard_E2bds_v5":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:9000,   cachedMbps:125,  uncachedIops:5500,   uncachedMbps:156},
            "Standard_E4bds_v5":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:19000,  cachedMbps:250,  uncachedIops:11000,  uncachedMbps:312},
            "Standard_E8bds_v5":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:38000,  cachedMbps:500,  uncachedIops:22000,  uncachedMbps:625},
            "Standard_E16bds_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:75000,  cachedMbps:1000, uncachedIops:44000,  uncachedMbps:1250},
            "Standard_E32bds_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:150000, cachedMbps:2000, uncachedIops:88000,  uncachedMbps:2500},
            "Standard_E48bds_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:225000, cachedMbps:3000, uncachedIops:120000, uncachedMbps:4000},
            "Standard_E64bds_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:375000, cachedMbps:4000, uncachedIops:120000, uncachedMbps:4000}
        },
        "ECsv5": {
            "Standard_EC2s_v5":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:0, cachedMbps:0, uncachedIops:3750,  uncachedMbps:85},
            "Standard_EC4s_v5":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:145},
            "Standard_EC8s_v5":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:290},
            "Standard_EC16s_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:600},
            "Standard_EC32s_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:865},
            "Standard_EC48s_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1315},
            "Standard_EC64s_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1735}
        },
        "ECdsv5": {
            "Standard_EC2ds_v5":  {vcpus:2,  mem:16,  maxDisks:4,  cachedIops:9000,   cachedMbps:125,  uncachedIops:3750,  uncachedMbps:85},
            "Standard_EC4ds_v5":  {vcpus:4,  mem:32,  maxDisks:8,  cachedIops:19000,  cachedMbps:250,  uncachedIops:6400,  uncachedMbps:145},
            "Standard_EC8ds_v5":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:38000,  cachedMbps:500,  uncachedIops:12800, uncachedMbps:290},
            "Standard_EC16ds_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:75000,  cachedMbps:1000, uncachedIops:25600, uncachedMbps:600},
            "Standard_EC32ds_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:150000, cachedMbps:2000, uncachedIops:51200, uncachedMbps:865},
            "Standard_EC48ds_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:225000, cachedMbps:3000, uncachedIops:76800, uncachedMbps:1315},
            "Standard_EC64ds_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:300000, cachedMbps:4000, uncachedIops:80000, uncachedMbps:1735}
        },
        "M": {
            "Standard_M8ms":   {vcpus:8,   mem:219,  maxDisks:8,  cachedIops:10000,  cachedMbps:100,  uncachedIops:5000,   uncachedMbps:125},
            "Standard_M16ms":  {vcpus:16,  mem:438,  maxDisks:8,  cachedIops:20000,  cachedMbps:200,  uncachedIops:10000,  uncachedMbps:250},
            "Standard_M32ts":  {vcpus:32,  mem:192,  maxDisks:16, cachedIops:40000,  cachedMbps:400,  uncachedIops:20000,  uncachedMbps:500},
            "Standard_M32ls":  {vcpus:32,  mem:256,  maxDisks:16, cachedIops:40000,  cachedMbps:400,  uncachedIops:20000,  uncachedMbps:500},
            "Standard_M32ms":  {vcpus:32,  mem:875,  maxDisks:16, cachedIops:40000,  cachedMbps:400,  uncachedIops:20000,  uncachedMbps:500},
            "Standard_M64s":   {vcpus:64,  mem:1024, maxDisks:32, cachedIops:80000,  cachedMbps:800,  uncachedIops:40000,  uncachedMbps:1000},
            "Standard_M64ls":  {vcpus:64,  mem:512,  maxDisks:32, cachedIops:80000,  cachedMbps:800,  uncachedIops:40000,  uncachedMbps:1000},
            "Standard_M64ms":  {vcpus:64,  mem:1792, maxDisks:32, cachedIops:80000,  cachedMbps:800,  uncachedIops:40000,  uncachedMbps:1000},
            "Standard_M128s":  {vcpus:128, mem:2048, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:80000,  uncachedMbps:2000},
            "Standard_M128ms": {vcpus:128, mem:3892, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:80000,  uncachedMbps:2000},
            "Standard_M64":    {vcpus:64,  mem:1024, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:40000,  uncachedMbps:1000},
            "Standard_M64m":   {vcpus:64,  mem:1792, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:40000,  uncachedMbps:1000},
            "Standard_M128":   {vcpus:128, mem:2048, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000,  uncachedMbps:2000},
            "Standard_M128m":  {vcpus:128, mem:3892, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000,  uncachedMbps:2000}
        },
        "Mdsv2-mm": {
            "Standard_M32dms_v2":   {vcpus:32,  mem:875,  maxDisks:32, cachedIops:40000,  cachedMbps:400,  uncachedIops:20000, uncachedMbps:500},
            "Standard_M64ds_v2":    {vcpus:64,  mem:1024, maxDisks:64, cachedIops:80000,  cachedMbps:800,  uncachedIops:40000, uncachedMbps:1000},
            "Standard_M64dms_v2":   {vcpus:64,  mem:1792, maxDisks:64, cachedIops:80000,  cachedMbps:800,  uncachedIops:40000, uncachedMbps:1000},
            "Standard_M128ds_v2":   {vcpus:128, mem:2048, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M128dms_v2":  {vcpus:128, mem:3892, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M192ids_v2":  {vcpus:192, mem:2048, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M192idms_v2": {vcpus:192, mem:4096, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:80000, uncachedMbps:2000}
        },
        "Msv2-mm": {
            "Standard_M32ms_v2":  {vcpus:32,  mem:875,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:20000, uncachedMbps:500},
            "Standard_M64s_v2":   {vcpus:64,  mem:1024, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:40000, uncachedMbps:1000},
            "Standard_M64ms_v2":  {vcpus:64,  mem:1792, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:40000, uncachedMbps:1000},
            "Standard_M128s_v2":  {vcpus:128, mem:2048, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M128ms_v2": {vcpus:128, mem:3892, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M192is_v2": {vcpus:192, mem:2048, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M192ims_v2":{vcpus:192, mem:4096, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000}
        },
        "Mv2": {
            "Standard_M208s_v2":   {vcpus:208, mem:2850,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:40000, uncachedMbps:1000},
            "Standard_M208ms_v2":  {vcpus:208, mem:5700,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:40000, uncachedMbps:1000},
            "Standard_M416s_v2":   {vcpus:416, mem:5700,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M416s_8_v2": {vcpus:416, mem:7600,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_M416ms_v2":  {vcpus:416, mem:11400, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000}
        },
        "Msv3-mm": {
            "Standard_M12s_v3":    {vcpus:12,  mem:240,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:16250,  uncachedMbps:390},
            "Standard_M24s_v3":    {vcpus:24,  mem:480,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:32500,  uncachedMbps:780},
            "Standard_M48s_1_v3":  {vcpus:48,  mem:974,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:65000,  uncachedMbps:1560},
            "Standard_M96s_1_v3":  {vcpus:96,  mem:974,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:65000,  uncachedMbps:1560},
            "Standard_M96s_2_v3":  {vcpus:96,  mem:1946, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:3120},
            "Standard_M176s_3_v3": {vcpus:176, mem:2794, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M176s_4_v3": {vcpus:176, mem:3892, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000}
        },
        "Mdsv3-mm": {
            "Standard_M12ds_v3":    {vcpus:12,  mem:240,  maxDisks:64, cachedIops:10000,  cachedMbps:100,  uncachedIops:16250,  uncachedMbps:390},
            "Standard_M24ds_v3":    {vcpus:24,  mem:480,  maxDisks:64, cachedIops:20000,  cachedMbps:200,  uncachedIops:32500,  uncachedMbps:780},
            "Standard_M48ds_1_v3":  {vcpus:48,  mem:974,  maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:65000,  uncachedMbps:1560},
            "Standard_M96ds_1_v3":  {vcpus:96,  mem:974,  maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:65000,  uncachedMbps:1560},
            "Standard_M96ds_2_v3":  {vcpus:96,  mem:1946, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:3120},
            "Standard_M176ds_3_v3": {vcpus:176, mem:2794, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M176ds_4_v3": {vcpus:176, mem:3892, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000}
        },
        "Msv3-hm": {
            "Standard_M416s_6_v3":   {vcpus:416, mem:5696,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M416s_8_v3":   {vcpus:416, mem:7600,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M624s_12_v3":  {vcpus:624, mem:11400, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M832s_12_v3":  {vcpus:832, mem:11400, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M832is_16_v3": {vcpus:832, mem:15200, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:130000, uncachedMbps:4000}
        },
        "Mdsv3-hm": {
            "Standard_M416ds_6_v3":   {vcpus:416, mem:5696,  maxDisks:64, cachedIops:250000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M416ds_8_v3":   {vcpus:416, mem:7600,  maxDisks:64, cachedIops:250000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M624ds_12_v3":  {vcpus:624, mem:11400, maxDisks:64, cachedIops:250000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M832ds_12_v3":  {vcpus:832, mem:11400, maxDisks:64, cachedIops:250000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000},
            "Standard_M832ids_16_v3": {vcpus:832, mem:15200, maxDisks:64, cachedIops:250000, cachedMbps:1600, uncachedIops:130000, uncachedMbps:4000}
        },
        "Mdsv3-vhm": {
            "Standard_M896ixds_32_v3":  {vcpus:896,  mem:30400, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:110000, uncachedMbps:8000},
            "Standard_M896ixds_24_v3":  {vcpus:896,  mem:23088, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:110000, uncachedMbps:8000},
            "Standard_M1792ixds_32_v3": {vcpus:1792, mem:30400, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:110000, uncachedMbps:8000}
        },
        "Mbsv3": {
            "Standard_M16bs_v3":  {vcpus:16,  mem:128,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:44000,  uncachedMbps:1000},
            "Standard_M32bs_v3":  {vcpus:32,  mem:256,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:88000,  uncachedMbps:2000},
            "Standard_M48bs_v3":  {vcpus:48,  mem:384,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:88000,  uncachedMbps:2000},
            "Standard_M64bs_v3":  {vcpus:64,  mem:512,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:88000,  uncachedMbps:2000},
            "Standard_M96bs_v3":  {vcpus:96,  mem:768,  maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:260000, uncachedMbps:4000},
            "Standard_M128bs_v3": {vcpus:128, mem:1024, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:260000, uncachedMbps:4000},
            "Standard_M176bs_v3": {vcpus:176, mem:1536, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:260000, uncachedMbps:6000},
            "Standard_M416bs_v3": {vcpus:416, mem:3800, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:240000, uncachedMbps:8000}
        },
        "Mbdsv3": {
            "Standard_M16bds_v3":     {vcpus:16,  mem:128,  maxDisks:64, cachedIops:10000,  cachedMbps:100,  uncachedIops:44000,  uncachedMbps:1000},
            "Standard_M32bds_v3":     {vcpus:32,  mem:256,  maxDisks:64, cachedIops:20000,  cachedMbps:200,  uncachedIops:88000,  uncachedMbps:2000},
            "Standard_M48bds_v3":     {vcpus:48,  mem:384,  maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:88000,  uncachedMbps:2000},
            "Standard_M64bds_v3":     {vcpus:64,  mem:512,  maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:88000,  uncachedMbps:2000},
            "Standard_M96bds_v3":     {vcpus:96,  mem:768,  maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:260000, uncachedMbps:4000},
            "Standard_M128bds_v3":    {vcpus:128, mem:1024, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:260000, uncachedMbps:4000},
            "Standard_M176bds_v3":    {vcpus:176, mem:1536, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:260000, uncachedMbps:6000},
            "Standard_M64bds_1_v3":   {vcpus:64,  mem:1397, maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:130000, uncachedMbps:6000},
            "Standard_M96bds_2_v3":   {vcpus:96,  mem:1946, maxDisks:64, cachedIops:40000,  cachedMbps:400,  uncachedIops:130000, uncachedMbps:8000},
            "Standard_M128bds_3_v3":  {vcpus:128, mem:2794, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:260000, uncachedMbps:8000},
            "Standard_M176bds_4_v3":  {vcpus:176, mem:3892, maxDisks:64, cachedIops:160000, cachedMbps:1600, uncachedIops:260000, uncachedMbps:8000}
        },
        // ===== v7 E-family (memory-optimized) =====
        "Esv7": {
            "Standard_E2s_v7": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000, uncachedMbpsPremium:115, uncachedIopsBurstPremium:45000, uncachedMbpsBurstPremium:1410}},
            "Standard_E4s_v7": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000, uncachedMbpsPremium:230, uncachedIopsBurstPremium:45000, uncachedMbpsBurstPremium:1410}},
            "Standard_E8s_v7": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000, uncachedMbpsPremium:460, uncachedIopsBurstPremium:45000, uncachedMbpsBurstPremium:1410}},
            "Standard_E16s_v7": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000, uncachedMbpsPremium:940, uncachedIopsBurstPremium:75000, uncachedMbpsBurstPremium:1410}},
            "Standard_E20s_v7": {vcpus:20, mem:160, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:40000, uncachedMbpsPremium:1150, uncachedIopsBurstPremium:75000, uncachedMbpsBurstPremium:1410}},
            "Standard_E32s_v7": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000, uncachedMbpsPremium:1885, uncachedIopsBurstPremium:100000, uncachedMbpsBurstPremium:1915}},
            "Standard_E48s_v7": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:96000, uncachedMbpsPremium:2830, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:2875}},
            "Standard_E64s_v7": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3775, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:3830}},
            "Standard_E96s_v7": {vcpus:96, mem:768, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5665, uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:5745}},
            "Standard_E128s_v7": {vcpus:128, mem:1024, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7550, uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7660}},
            "Standard_E192s_v7": {vcpus:192, mem:1536, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:307200, uncachedMbpsPremium:11325, uncachedIopsBurstPremium:350000, uncachedMbpsBurstPremium:12000}},
            "Standard_E248s_v7": {vcpus:248, mem:1888, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:396800, uncachedMbpsPremium:13145, uncachedIopsBurstPremium:500000, uncachedMbpsBurstPremium:15000}},
            "Standard_E372is_v7": {vcpus:372, mem:2832, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:500000, uncachedMbpsPremium:16000, uncachedIopsBurstPremium:500000, uncachedMbpsBurstPremium:16000}}
        },
        "Edsv7": {
            "Standard_E2ds_v7": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:50000, tempMbpsRR:280, tempIopsRW:25000, tempMbpsRW:140}, remote:{maxDataDisks:10, uncachedIopsPremium:4000, uncachedMbpsPremium:115, uncachedIopsBurstPremium:45000, uncachedMbpsBurstPremium:1410}},
            "Standard_E4ds_v7": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:100000, tempMbpsRR:560, tempIopsRW:50000, tempMbpsRW:280}, remote:{maxDataDisks:12, uncachedIopsPremium:8000, uncachedMbpsPremium:230, uncachedIopsBurstPremium:45000, uncachedMbpsBurstPremium:1410}},
            "Standard_E8ds_v7": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:200000, tempMbpsRR:1120, tempIopsRW:100000, tempMbpsRW:560}, remote:{maxDataDisks:26, uncachedIopsPremium:16000, uncachedMbpsPremium:460, uncachedIopsBurstPremium:45000, uncachedMbpsBurstPremium:1410}},
            "Standard_E16ds_v7": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:400000, tempMbpsRR:2240, tempIopsRW:200000, tempMbpsRW:1120}, remote:{maxDataDisks:48, uncachedIopsPremium:32000, uncachedMbpsPremium:940, uncachedIopsBurstPremium:75000, uncachedMbpsBurstPremium:1410}},
            "Standard_E20ds_v7": {vcpus:20, mem:160, local:{maxTempDisks:2, tempDiskGiB:550, tempIopsRR:500000, tempMbpsRR:2800, tempIopsRW:250000, tempMbpsRW:1400}, remote:{maxDataDisks:48, uncachedIopsPremium:40000, uncachedMbpsPremium:1150, uncachedIopsBurstPremium:75000, uncachedMbpsBurstPremium:1410}},
            "Standard_E32ds_v7": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:800000, tempMbpsRR:4480, tempIopsRW:400000, tempMbpsRW:2240}, remote:{maxDataDisks:64, uncachedIopsPremium:64000, uncachedMbpsPremium:1885, uncachedIopsBurstPremium:100000, uncachedMbpsBurstPremium:1915}},
            "Standard_E48ds_v7": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:1200000, tempMbpsRR:6720, tempIopsRW:600000, tempMbpsRW:3360}, remote:{maxDataDisks:64, uncachedIopsPremium:96000, uncachedMbpsPremium:2830, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:2875}},
            "Standard_E64ds_v7": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1600000, tempMbpsRR:8960, tempIopsRW:800000, tempMbpsRW:4480}, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3775, uncachedIopsBurstPremium:160000, uncachedMbpsBurstPremium:3830}},
            "Standard_E96ds_v7": {vcpus:96, mem:768, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:2400000, tempMbpsRR:13440, tempIopsRW:1200000, tempMbpsRW:6720}, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5665, uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:5745}},
            "Standard_E128ds_v7": {vcpus:128, mem:1024, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:3200000, tempMbpsRR:17920, tempIopsRW:1600000, tempMbpsRW:8960}, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7550, uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7660}},
            "Standard_E192ds_v7": {vcpus:192, mem:1536, local:{maxTempDisks:6, tempDiskGiB:1760, tempIopsRR:4800000, tempMbpsRR:26880, tempIopsRW:2400000, tempMbpsRW:13440}, remote:{maxDataDisks:64, uncachedIopsPremium:307200, uncachedMbpsPremium:11325, uncachedIopsBurstPremium:350000, uncachedMbpsBurstPremium:12000}},
            "Standard_E248ds_v7": {vcpus:248, mem:1888, local:{maxTempDisks:5, tempDiskGiB:2816, tempIopsRR:6400000, tempMbpsRR:35840, tempIopsRW:3200000, tempMbpsRW:17000}, remote:{maxDataDisks:64, uncachedIopsPremium:396800, uncachedMbpsPremium:13145, uncachedIopsBurstPremium:500000, uncachedMbpsBurstPremium:15000}},
            "Standard_E372ids_v7": {vcpus:372, mem:2832, local:{maxTempDisks:6, tempDiskGiB:3520, tempIopsRR:9600000, tempMbpsRR:53760, tempIopsRW:4800000, tempMbpsRW:20400}, remote:{maxDataDisks:64, uncachedIopsPremium:500000, uncachedMbpsPremium:16000, uncachedIopsBurstPremium:500000, uncachedMbpsBurstPremium:16000}}
        },
        "Easv7": {
            "Standard_E2as_v7": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000, uncachedMbpsPremium:118, uncachedIopsBurstPremium:44000, uncachedMbpsBurstPremium:1412}},
            "Standard_E4as_v7": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000, uncachedMbpsPremium:234, uncachedIopsBurstPremium:47200, uncachedMbpsBurstPremium:1412}},
            "Standard_E8as_v7": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000, uncachedMbpsPremium:468, uncachedIopsBurstPremium:47200, uncachedMbpsBurstPremium:1412}},
            "Standard_E16as_v7": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000, uncachedMbpsPremium:936, uncachedIopsBurstPremium:72700, uncachedMbpsBurstPremium:1412}},
            "Standard_E32as_v7": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000, uncachedMbpsPremium:1872, uncachedIopsBurstPremium:94400, uncachedMbpsBurstPremium:1916}},
            "Standard_E48as_v7": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:96000, uncachedMbpsPremium:2808, uncachedIopsBurstPremium:99000, uncachedMbpsBurstPremium:2874}},
            "Standard_E64as_v7": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744, uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_E96as_v7": {vcpus:96, mem:768, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663, uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_E128as_v7": {vcpus:128, mem:1024, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488, uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_E160as_v7": {vcpus:160, mem:1280, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Eadsv7": {
            "Standard_E2ads_v7": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:37500, tempMbpsRR:280, tempIopsRW:15000, tempMbpsRW:140}, remote:{maxDataDisks:10, uncachedIopsPremium:4000, uncachedMbpsPremium:118, uncachedIopsBurstPremium:44000, uncachedMbpsBurstPremium:1412}},
            "Standard_E4ads_v7": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:75000, tempMbpsRR:560, tempIopsRW:30000, tempMbpsRW:280}, remote:{maxDataDisks:12, uncachedIopsPremium:8000, uncachedMbpsPremium:234, uncachedIopsBurstPremium:47200, uncachedMbpsBurstPremium:1412}},
            "Standard_E8ads_v7": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:150000, tempMbpsRR:1120, tempIopsRW:60000, tempMbpsRW:560}, remote:{maxDataDisks:26, uncachedIopsPremium:16000, uncachedMbpsPremium:468, uncachedIopsBurstPremium:47200, uncachedMbpsBurstPremium:1412}},
            "Standard_E16ads_v7": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:300000, tempMbpsRR:2240, tempIopsRW:120000, tempMbpsRW:1120}, remote:{maxDataDisks:48, uncachedIopsPremium:32000, uncachedMbpsPremium:936, uncachedIopsBurstPremium:72700, uncachedMbpsBurstPremium:1412}},
            "Standard_E32ads_v7": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:600000, tempMbpsRR:4480, tempIopsRW:240000, tempMbpsRW:2240}, remote:{maxDataDisks:64, uncachedIopsPremium:64000, uncachedMbpsPremium:1872, uncachedIopsBurstPremium:94400, uncachedMbpsBurstPremium:1916}},
            "Standard_E48ads_v7": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:900000, tempMbpsRR:6720, tempIopsRW:360000, tempMbpsRW:3360}, remote:{maxDataDisks:64, uncachedIopsPremium:96000, uncachedMbpsPremium:2808, uncachedIopsBurstPremium:99000, uncachedMbpsBurstPremium:2874}},
            "Standard_E64ads_v7": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1200000, tempMbpsRR:8960, tempIopsRW:480000, tempMbpsRW:4480}, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744, uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_E96ads_v7": {vcpus:96, mem:768, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:1800000, tempMbpsRR:13440, tempIopsRW:720000, tempMbpsRW:6720}, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663, uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_E128ads_v7": {vcpus:128, mem:1024, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:17920, tempIopsRW:960000, tempMbpsRW:8960}, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488, uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_E160ads_v7": {vcpus:160, mem:1280, local:{maxTempDisks:4, tempDiskGiB:2200, tempIopsRR:3000000, tempMbpsRR:22400, tempIopsRW:1200000, tempMbpsRW:11200}, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        // ===== v6 E-family (memory-optimized) =====
        "Esv6": {
            "Standard_E2s_v6": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:8, uncachedIopsPremium:3750, uncachedMbpsPremium:106, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4s_v6": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400, uncachedMbpsPremium:212, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8s_v6": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800, uncachedMbpsPremium:424, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16s_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600, uncachedMbpsPremium:848, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E20s_v6": {vcpus:20, mem:160, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000, uncachedMbpsPremium:1060, uncachedIopsBurstPremium:64000, uncachedMbpsBurstPremium:1600}},
            "Standard_E32s_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200, uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:1696}},
            "Standard_E48s_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:2544}},
            "Standard_E64s_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_E96s_v6": {vcpus:96, mem:768, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_E128s_v6": {vcpus:128, mem:1024, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782, uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}},
            "Standard_E192is_v6": {vcpus:192, mem:1832, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:260000, uncachedMbpsPremium:12000, uncachedIopsBurstPremium:260000, uncachedMbpsBurstPremium:12000}}
        },
        "Edsv6": {
            "Standard_E2ds_v6": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:37500, tempMbpsRR:180, tempIopsRW:15000, tempMbpsRW:90}, remote:{maxDataDisks:8, uncachedIopsPremium:3750, uncachedMbpsPremium:106, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4ds_v6": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:75000, tempMbpsRR:360, tempIopsRW:30000, tempMbpsRW:180}, remote:{maxDataDisks:12, uncachedIopsPremium:6400, uncachedMbpsPremium:212, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8ds_v6": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:150000, tempMbpsRR:720, tempIopsRW:60000, tempMbpsRW:360}, remote:{maxDataDisks:24, uncachedIopsPremium:12800, uncachedMbpsPremium:424, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16ds_v6": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:300000, tempMbpsRR:1440, tempIopsRW:120000, tempMbpsRW:720}, remote:{maxDataDisks:48, uncachedIopsPremium:25600, uncachedMbpsPremium:848, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E20ds_v6": {vcpus:20, mem:160, local:{maxTempDisks:2, tempDiskGiB:550, tempIopsRR:375000, tempMbpsRR:1800, tempIopsRW:150000, tempMbpsRW:900}, remote:{maxDataDisks:48, uncachedIopsPremium:32000, uncachedMbpsPremium:1060, uncachedIopsBurstPremium:64000, uncachedMbpsBurstPremium:1600}},
            "Standard_E32ds_v6": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:600000, tempMbpsRR:2880, tempIopsRW:240000, tempMbpsRW:1440}, remote:{maxDataDisks:64, uncachedIopsPremium:51200, uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:1696}},
            "Standard_E48ds_v6": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:900000, tempMbpsRR:4320, tempIopsRW:360000, tempMbpsRW:2160}, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:2544}},
            "Standard_E64ds_v6": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1200000, tempMbpsRR:5760, tempIopsRW:480000, tempMbpsRW:2880}, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_E96ds_v6": {vcpus:96, mem:768, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:1800000, tempMbpsRR:8640, tempIopsRW:720000, tempMbpsRW:4320}, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_E128ds_v6": {vcpus:128, mem:1024, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000, tempMbpsRW:5760}, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782, uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}},
            "Standard_E192ids_v6": {vcpus:192, mem:1832, local:{maxTempDisks:6, tempDiskGiB:1760, tempIopsRR:3600000, tempMbpsRR:17280, tempIopsRW:1440000, tempMbpsRW:8640}, remote:{maxDataDisks:64, uncachedIopsPremium:360000, uncachedMbpsPremium:17280, uncachedIopsBurstPremium:1440000, uncachedMbpsBurstPremium:8640}}
        },
        "Epsv6": {
            "Standard_E2ps_v6": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:8, uncachedIopsPremium:3750, uncachedMbpsPremium:106, uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4ps_v6": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400, uncachedMbpsPremium:212, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8ps_v6": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800, uncachedMbpsPremium:424, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16ps_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600, uncachedMbpsPremium:848, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E32ps_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200, uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:2000}},
            "Standard_E48ps_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:3000}},
            "Standard_E64ps_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_E96ps_v6": {vcpus:96, mem:672, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5000, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5000}}
        },
        "Epdsv6": {
            "Standard_E2pds_v6": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:37500, tempMbpsRR:90, tempIopsRW:15000, tempMbpsRW:180}, remote:{maxDataDisks:8, uncachedIopsPremium:3750, uncachedMbpsPremium:106, uncachedIopsBurstPremium:10000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4pds_v6": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:75000, tempMbpsRR:180, tempIopsRW:30000, tempMbpsRW:360}, remote:{maxDataDisks:12, uncachedIopsPremium:6400, uncachedMbpsPremium:212, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8pds_v6": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:150000, tempMbpsRR:360, tempIopsRW:60000, tempMbpsRW:720}, remote:{maxDataDisks:24, uncachedIopsPremium:12800, uncachedMbpsPremium:424, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16pds_v6": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:300000, tempMbpsRR:720, tempIopsRW:120000, tempMbpsRW:1440}, remote:{maxDataDisks:48, uncachedIopsPremium:25600, uncachedMbpsPremium:848, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E32pds_v6": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:600000, tempMbpsRR:1440, tempIopsRW:240000, tempMbpsRW:2880}, remote:{maxDataDisks:64, uncachedIopsPremium:51200, uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:2000}},
            "Standard_E48pds_v6": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:900000, tempMbpsRR:2160, tempIopsRW:360000, tempMbpsRW:4320}, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:3000}},
            "Standard_E64pds_v6": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1200000, tempMbpsRR:2880, tempIopsRW:480000, tempMbpsRW:5760}, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_E96pds_v6": {vcpus:96, mem:672, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:1800000, tempMbpsRR:4320, tempIopsRW:720000, tempMbpsRW:8640}, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5000, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5000}}
        },
        "Easv6": {
            "Standard_E2as_v6": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:4, uncachedIopsPremium:4000, uncachedMbpsPremium:90, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4as_v6": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:8, uncachedIopsPremium:7600, uncachedMbpsPremium:180, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8as_v6": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:16, uncachedIopsPremium:15200, uncachedMbpsPremium:360, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16as_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:30400, uncachedMbpsPremium:720, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E20as_v6": {vcpus:20, mem:160, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:38000, uncachedMbpsPremium:900, uncachedIopsBurstPremium:64000, uncachedMbpsBurstPremium:1600}},
            "Standard_E32as_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:57600, uncachedMbpsPremium:1440, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:1700}},
            "Standard_E48as_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:86400, uncachedMbpsPremium:2160, uncachedIopsBurstPremium:90000, uncachedMbpsBurstPremium:2550}},
            "Standard_E64as_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880, uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_E96as_v6": {vcpus:96, mem:672, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:175000, uncachedMbpsPremium:4320, uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        "Eadsv6": {
            "Standard_E2ads_v6": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:37500, tempMbpsRR:180}, remote:{maxDataDisks:4, uncachedIopsPremium:4000, uncachedMbpsPremium:90, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4ads_v6": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:75000, tempMbpsRR:360}, remote:{maxDataDisks:8, uncachedIopsPremium:7600, uncachedMbpsPremium:180, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8ads_v6": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:150000, tempMbpsRR:720}, remote:{maxDataDisks:16, uncachedIopsPremium:15200, uncachedMbpsPremium:360, uncachedIopsBurstPremium:20000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16ads_v6": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:300000, tempMbpsRR:1440}, remote:{maxDataDisks:32, uncachedIopsPremium:30400, uncachedMbpsPremium:720, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E20ads_v6": {vcpus:20, mem:160, local:{maxTempDisks:2, tempDiskGiB:550, tempIopsRR:375000, tempMbpsRR:1800}, remote:{maxDataDisks:32, uncachedIopsPremium:38000, uncachedMbpsPremium:900, uncachedIopsBurstPremium:64000, uncachedMbpsBurstPremium:1600}},
            "Standard_E32ads_v6": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:600000, tempMbpsRR:2880}, remote:{maxDataDisks:32, uncachedIopsPremium:57600, uncachedMbpsPremium:1440, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:1700}},
            "Standard_E48ads_v6": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:900000, tempMbpsRR:4320}, remote:{maxDataDisks:32, uncachedIopsPremium:86400, uncachedMbpsPremium:2160, uncachedIopsBurstPremium:90000, uncachedMbpsBurstPremium:2550}},
            "Standard_E64ads_v6": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1200000, tempMbpsRR:5760}, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880, uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_E96ads_v6": {vcpus:96, mem:672, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:1800000, tempMbpsRR:8640}, remote:{maxDataDisks:32, uncachedIopsPremium:175000, uncachedMbpsPremium:4320, uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        "Ensv6": {
            "Standard_E2ns_v6": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:8, uncachedIopsPremium:3750, uncachedMbpsPremium:106, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4ns_v6": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:12, uncachedIopsPremium:6400, uncachedMbpsPremium:212, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8ns_v6": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:24, uncachedIopsPremium:12800, uncachedMbpsPremium:424, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16ns_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:25600, uncachedMbpsPremium:848, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E32ns_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:51200, uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:1696}},
            "Standard_E48ns_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:2544}},
            "Standard_E64ns_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_E96ns_v6": {vcpus:96, mem:768, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_E128ns_v6": {vcpus:128, mem:1024, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782, uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        "Endsv6": {
            "Standard_E2nds_v6": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:37500, tempMbpsRR:180, tempIopsRW:15000, tempMbpsRW:90}, remote:{maxDataDisks:8, uncachedIopsPremium:3750, uncachedMbpsPremium:106, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E4nds_v6": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:75000, tempMbpsRR:360, tempIopsRW:30000, tempMbpsRW:180}, remote:{maxDataDisks:12, uncachedIopsPremium:6400, uncachedMbpsPremium:212, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E8nds_v6": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:150000, tempMbpsRR:720, tempIopsRW:60000, tempMbpsRW:360}, remote:{maxDataDisks:24, uncachedIopsPremium:12800, uncachedMbpsPremium:424, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E16nds_v6": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:300000, tempMbpsRR:1440, tempIopsRW:120000, tempMbpsRW:720}, remote:{maxDataDisks:48, uncachedIopsPremium:25600, uncachedMbpsPremium:848, uncachedIopsBurstPremium:40000, uncachedMbpsBurstPremium:1250}},
            "Standard_E32nds_v6": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:600000, tempMbpsRR:2880, tempIopsRW:240000, tempMbpsRW:1440}, remote:{maxDataDisks:64, uncachedIopsPremium:51200, uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:1696}},
            "Standard_E48nds_v6": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:900000, tempMbpsRR:4320, tempIopsRW:360000, tempMbpsRW:2160}, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000, uncachedMbpsBurstPremium:2544}},
            "Standard_E64nds_v6": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1200000, tempMbpsRR:5760, tempIopsRW:480000, tempMbpsRW:2880}, remote:{maxDataDisks:64, uncachedIopsPremium:76800, uncachedMbpsPremium:2544, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_E96nds_v6": {vcpus:96, mem:768, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:1800000, tempMbpsRR:8640, tempIopsRW:720000, tempMbpsRW:4320}, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}},
            "Standard_E128nds_v6": {vcpus:128, mem:1024, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000, tempMbpsRW:5760}, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:6782, uncachedIopsBurstPremium:204800, uncachedMbpsBurstPremium:6782}}
        },
        // ===== v5 E-family additions (memory-optimized) =====
        "Ev5": {
            "Standard_E2_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:85},
            "Standard_E4_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:145},
            "Standard_E8_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:290},
            "Standard_E16_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:600},
            "Standard_E20_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:750},
            "Standard_E32_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:865},
            "Standard_E48_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1315},
            "Standard_E64_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1735},
            "Standard_E96_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2600},
            "Standard_E104i_v5": {vcpus:104, mem:672, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:120000, uncachedMbps:4000}
        },
        "Edv5": {
            "Standard_E2d_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:85},
            "Standard_E4d_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:145},
            "Standard_E8d_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:290},
            "Standard_E16d_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:600},
            "Standard_E20d_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:750},
            "Standard_E32d_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:865},
            "Standard_E48d_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1315},
            "Standard_E64d_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1735},
            "Standard_E96d_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2600},
            "Standard_E104id_v5": {vcpus:104, mem:672, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:120000, uncachedMbps:4000}
        },
        "Easv5": {
            "Standard_E2as_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:82},
            "Standard_E4as_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:144},
            "Standard_E8as_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_E16as_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20as_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32as_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48as_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64as_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_E96as_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1600},
            "Standard_E112ias_v5": {vcpus:112, mem:672, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:120000, uncachedMbps:2000}
        },
        "Eadsv5": {
            "Standard_E2ads_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:82},
            "Standard_E4ads_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:144},
            "Standard_E8ads_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_E16ads_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20ads_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32ads_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48ads_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64ads_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_E96ads_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1600},
            "Standard_E112iads_v5": {vcpus:112, mem:672, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:120000, uncachedMbps:2000}
        },
        "Epsv5": {
            "Standard_E2ps_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:85},
            "Standard_E4ps_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:145},
            "Standard_E8ps_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:290},
            "Standard_E16ps_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:600},
            "Standard_E20ps_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:750},
            "Standard_E32ps_v5": {vcpus:32, mem:208, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:865}
        },
        "Epdsv5": {
            "Standard_E2pds_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:85},
            "Standard_E4pds_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:145},
            "Standard_E8pds_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:290},
            "Standard_E16pds_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:600},
            "Standard_E20pds_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:750},
            "Standard_E32pds_v5": {vcpus:32, mem:208, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:865}
        },
        // ===== v4 E-family additions (memory-optimized) =====
        "Edv4": {
            "Standard_E2d_v4": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3200, uncachedMbps:48},
            "Standard_E4d_v4": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_E8d_v4": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_E16d_v4": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20d_v4": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32d_v4": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48d_v4": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64d_v4": {vcpus:64, mem:504, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "Edsv4": {
            "Standard_E2ds_v4": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3200, uncachedMbps:48},
            "Standard_E4ds_v4": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_E8ds_v4": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_E16ds_v4": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20ds_v4": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32ds_v4": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48ds_v4": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64ds_v4": {vcpus:64, mem:504, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_E80ids_v4": {vcpus:80, mem:504, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1500}
        },
        "Eav4": {
            "Standard_E2a_v4": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3200, uncachedMbps:48},
            "Standard_E4a_v4": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_E8a_v4": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_E16a_v4": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20a_v4": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32a_v4": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48a_v4": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1148},
            "Standard_E64a_v4": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_E96a_v4": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "Ev4": {
            "Standard_E2_v4": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3200, uncachedMbps:48},
            "Standard_E4_v4": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_E8_v4": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_E16_v4": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20_v4": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32_v4": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48_v4": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64_v4": {vcpus:64, mem:504, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "Esv4": {
            "Standard_E2s_v4": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3200, uncachedMbps:48},
            "Standard_E4s_v4": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_E8s_v4": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_E16s_v4": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_E20s_v4": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_E32s_v4": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_E48s_v4": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_E64s_v4": {vcpus:64, mem:504, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_E80is_v4": {vcpus:80, mem:504, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1500}
        },
        // ===== Eb-family v6 (memory-optimized) =====
        "Ebsv6": {
            "Standard_E2bs_v6": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:8, uncachedIopsPremium:8800, uncachedMbpsPremium:253, uncachedIopsBurstPremium:30000, uncachedMbpsBurstPremium:1200}},
            "Standard_E4bs_v6": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:12, uncachedIopsPremium:17600, uncachedMbpsPremium:506, uncachedIopsBurstPremium:35000, uncachedMbpsBurstPremium:1200}},
            "Standard_E8bs_v6": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:24, uncachedIopsPremium:36300, uncachedMbpsPremium:1023, uncachedIopsBurstPremium:44000, uncachedMbpsBurstPremium:1500}},
            "Standard_E16bs_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:48, uncachedIopsPremium:72600, uncachedMbpsPremium:1980, uncachedIopsBurstPremium:77000, uncachedMbpsBurstPremium:2500}},
            "Standard_E32bs_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:143000, uncachedMbpsPremium:4070, uncachedIopsBurstPremium:154000, uncachedMbpsBurstPremium:5000}},
            "Standard_E48bs_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:209000, uncachedMbpsPremium:6160, uncachedIopsBurstPremium:220000, uncachedMbpsBurstPremium:7000}},
            "Standard_E64bs_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:242000, uncachedMbpsPremium:6600, uncachedIopsBurstPremium:253000, uncachedMbpsBurstPremium:8000}},
            "Standard_E96bs_v6": {vcpus:96, mem:768, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:286000, uncachedMbpsPremium:8250, uncachedIopsBurstPremium:286000, uncachedMbpsBurstPremium:10000}},
            "Standard_E128bs_v6": {vcpus:128, mem:1024, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:330000, uncachedMbpsPremium:10000, uncachedIopsBurstPremium:350000, uncachedMbpsBurstPremium:11500}},
            "Standard_E192ibs_v6": {vcpus:192, mem:1832, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:400000, uncachedMbpsPremium:14000, uncachedIopsBurstPremium:400000, uncachedMbpsBurstPremium:14000}}
        },
        "Ebdsv6": {
            "Standard_E2bds_v6": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:110, tempIopsRR:37500, tempMbpsRR:180, tempIopsRW:15000, tempMbpsRW:90}, remote:{maxDataDisks:8, uncachedIopsPremium:8800, uncachedMbpsPremium:253, uncachedIopsBurstPremium:30000, uncachedMbpsBurstPremium:1200}},
            "Standard_E4bds_v6": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:220, tempIopsRR:75000, tempMbpsRR:360, tempIopsRW:30000, tempMbpsRW:180}, remote:{maxDataDisks:12, uncachedIopsPremium:17600, uncachedMbpsPremium:506, uncachedIopsBurstPremium:35000, uncachedMbpsBurstPremium:1200}},
            "Standard_E8bds_v6": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:440, tempIopsRR:150000, tempMbpsRR:720, tempIopsRW:60000, tempMbpsRW:360}, remote:{maxDataDisks:24, uncachedIopsPremium:36300, uncachedMbpsPremium:1023, uncachedIopsBurstPremium:44000, uncachedMbpsBurstPremium:1500}},
            "Standard_E16bds_v6": {vcpus:16, mem:128, local:{maxTempDisks:2, tempDiskGiB:440, tempIopsRR:300000, tempMbpsRR:1440, tempIopsRW:120000, tempMbpsRW:720}, remote:{maxDataDisks:48, uncachedIopsPremium:72600, uncachedMbpsPremium:1980, uncachedIopsBurstPremium:77000, uncachedMbpsBurstPremium:2500}},
            "Standard_E32bds_v6": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:440, tempIopsRR:600000, tempMbpsRR:2880, tempIopsRW:240000, tempMbpsRW:1440}, remote:{maxDataDisks:64, uncachedIopsPremium:143000, uncachedMbpsPremium:4070, uncachedIopsBurstPremium:154000, uncachedMbpsBurstPremium:5000}},
            "Standard_E48bds_v6": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:440, tempIopsRR:900000, tempMbpsRR:4320, tempIopsRW:360000, tempMbpsRW:2160}, remote:{maxDataDisks:64, uncachedIopsPremium:209000, uncachedMbpsPremium:6160, uncachedIopsBurstPremium:220000, uncachedMbpsBurstPremium:7000}},
            "Standard_E64bds_v6": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:880, tempIopsRR:1200000, tempMbpsRR:5760, tempIopsRW:480000, tempMbpsRW:2880}, remote:{maxDataDisks:64, uncachedIopsPremium:242000, uncachedMbpsPremium:6600, uncachedIopsBurstPremium:253000, uncachedMbpsBurstPremium:8000}},
            "Standard_E96bds_v6": {vcpus:96, mem:768, local:{maxTempDisks:6, tempDiskGiB:880, tempIopsRR:1800000, tempMbpsRR:8640, tempIopsRW:720000, tempMbpsRW:4320}, remote:{maxDataDisks:64, uncachedIopsPremium:286000, uncachedMbpsPremium:8250, uncachedIopsBurstPremium:286000, uncachedMbpsBurstPremium:10000}},
            "Standard_E128bds_v6": {vcpus:128, mem:1024, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:11520, tempIopsRW:960000, tempMbpsRW:5760}, remote:{maxDataDisks:64, uncachedIopsPremium:330000, uncachedMbpsPremium:10000, uncachedIopsBurstPremium:350000, uncachedMbpsBurstPremium:11500}},
            "Standard_E192ibds_v6": {vcpus:192, mem:1832, local:{maxTempDisks:6, tempDiskGiB:1760, tempIopsRR:3600000, tempMbpsRR:17280, tempIopsRW:1440000, tempMbpsRW:8640}, remote:{maxDataDisks:64, uncachedIopsPremium:400000, uncachedMbpsPremium:14000, uncachedIopsBurstPremium:400000, uncachedMbpsBurstPremium:14000}}
        },
        // ===== EC-family v6 (memory-optimized, confidential) =====
        "ECasv6": {
            "Standard_EC2as_v6": {vcpus:2, mem:16, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC4as_v6": {vcpus:4, mem:32, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC8as_v6": {vcpus:8, mem:64, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC16as_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC32as_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC48as_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC64as_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC96as_v6": {vcpus:96, mem:672, local:null, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}}
        },
        "ECadsv6": {
            "Standard_EC2ads_v6": {vcpus:2, mem:16, local:{maxTempDisks:1, tempDiskGiB:75, tempIopsRR:9000, tempMbpsRR:125}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC4ads_v6": {vcpus:4, mem:32, local:{maxTempDisks:1, tempDiskGiB:150, tempIopsRR:19000, tempMbpsRR:250}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC8ads_v6": {vcpus:8, mem:64, local:{maxTempDisks:1, tempDiskGiB:300, tempIopsRR:38000, tempMbpsRR:500}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC16ads_v6": {vcpus:16, mem:128, local:{maxTempDisks:1, tempDiskGiB:600, tempIopsRR:75000, tempMbpsRR:1000}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC32ads_v6": {vcpus:32, mem:256, local:{maxTempDisks:1, tempDiskGiB:1200, tempIopsRR:150000, tempMbpsRR:2000}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC48ads_v6": {vcpus:48, mem:384, local:{maxTempDisks:1, tempDiskGiB:1800, tempIopsRR:225000, tempMbpsRR:3000}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC64ads_v6": {vcpus:64, mem:512, local:{maxTempDisks:1, tempDiskGiB:2400, tempIopsRR:300000, tempMbpsRR:4000}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}},
            "Standard_EC96ads_v6": {vcpus:96, mem:672, local:{maxTempDisks:1, tempDiskGiB:3600, tempIopsRR:450000, tempMbpsRR:4000}, remote:{maxDataDisks:0 /* TODO: confirm */, uncachedIopsPremium:0 /* TODO: confirm */, uncachedMbpsPremium:0 /* TODO: confirm */, uncachedIopsBurstPremium:0 /* TODO: confirm */, uncachedMbpsBurstPremium:0 /* TODO: confirm */}}
        },
        "ECesv6": {
            "Standard_EC2es_v6": {vcpus:2, mem:16, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:106},
            "Standard_EC4es_v6": {vcpus:4, mem:32, maxDisks:12, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:212},
            "Standard_EC8es_v6": {vcpus:8, mem:64, maxDisks:24, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:424},
            "Standard_EC16es_v6": {vcpus:16, mem:128, maxDisks:48, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:848},
            "Standard_EC32es_v6": {vcpus:32, mem:256, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:1696},
            "Standard_EC48es_v6": {vcpus:48, mem:384, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:2544},
            "Standard_EC64es_v6": {vcpus:64, mem:512, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:3392}
        },
        "ECedsv6": {
            "Standard_EC2eds_v6": {vcpus:2, mem:16, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:106},
            "Standard_EC4eds_v6": {vcpus:4, mem:32, maxDisks:12, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:212},
            "Standard_EC8eds_v6": {vcpus:8, mem:64, maxDisks:24, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:424},
            "Standard_EC16eds_v6": {vcpus:16, mem:128, maxDisks:48, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:848},
            "Standard_EC32eds_v6": {vcpus:32, mem:256, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:1696},
            "Standard_EC48eds_v6": {vcpus:48, mem:384, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:2544},
            "Standard_EC64eds_v6": {vcpus:64, mem:512, maxDisks:64, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:3392}
        },
        // ===== EC-family v5 (memory-optimized, confidential) =====
        "ECasv5": {
            "Standard_EC2as_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:48},
            "Standard_EC4as_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_EC8as_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_EC16as_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_EC20as_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_EC32as_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_EC48as_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_EC64as_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_EC96as_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "ECadsv5": {
            "Standard_EC2ads_v5": {vcpus:2, mem:16, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:3750, uncachedMbps:48},
            "Standard_EC4ads_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:96},
            "Standard_EC8ads_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:192},
            "Standard_EC16ads_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_EC20ads_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_EC32ads_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_EC48ads_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_EC64ads_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_EC96ads_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "ECasccv5": {
            "Standard_EC4as_cc_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:144},
            "Standard_EC8as_cc_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_EC16as_cc_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_EC20as_cc_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_EC32as_cc_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_EC48as_cc_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_EC64as_cc_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_EC96as_cc_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1600}
        },
        "ECadsccv5": {
            "Standard_EC4ads_cc_v5": {vcpus:4, mem:32, maxDisks:8, cachedIops:0, cachedMbps:0, uncachedIops:6400, uncachedMbps:144},
            "Standard_EC8ads_cc_v5": {vcpus:8, mem:64, maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_EC16ads_cc_v5": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_EC20ads_cc_v5": {vcpus:20, mem:160, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:32000, uncachedMbps:480},
            "Standard_EC32ads_cc_v5": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_EC48ads_cc_v5": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_EC64ads_cc_v5": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_EC96ads_cc_v5": {vcpus:96, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1600}
        }
    },
    "Compute Optimized": {
        "Fsv2": {
            "Standard_F2s_v2":  {vcpus:2,  mem:4,   maxDisks:4,  cachedIops:4000,   cachedMbps:32,   uncachedIops:3200,  uncachedMbps:47},
            "Standard_F4s_v2":  {vcpus:4,  mem:8,   maxDisks:8,  cachedIops:8000,   cachedMbps:64,   uncachedIops:6400,  uncachedMbps:95},
            "Standard_F8s_v2":  {vcpus:8,  mem:16,  maxDisks:16, cachedIops:16000,  cachedMbps:128,  uncachedIops:12800, uncachedMbps:190},
            "Standard_F16s_v2": {vcpus:16, mem:32,  maxDisks:32, cachedIops:32000,  cachedMbps:256,  uncachedIops:25600, uncachedMbps:380},
            "Standard_F32s_v2": {vcpus:32, mem:64,  maxDisks:32, cachedIops:64000,  cachedMbps:512,  uncachedIops:51200, uncachedMbps:750},
            "Standard_F48s_v2": {vcpus:48, mem:96,  maxDisks:32, cachedIops:96000,  cachedMbps:768,  uncachedIops:76800, uncachedMbps:1100},
            "Standard_F64s_v2": {vcpus:64, mem:128, maxDisks:32, cachedIops:128000, cachedMbps:1024, uncachedIops:80000, uncachedMbps:1100},
            "Standard_F72s_v2": {vcpus:72, mem:144, maxDisks:32, cachedIops:144000, cachedMbps:1152, uncachedIops:80000, uncachedMbps:1100}
        },
        "FX": {
            "Standard_FX4mds":  {vcpus:4,  mem:84,   maxDisks:8,  cachedIops:12800,  cachedMbps:200,  uncachedIops:6700,   uncachedMbps:156},
            "Standard_FX12mds": {vcpus:12, mem:252,  maxDisks:24, cachedIops:38400,  cachedMbps:600,  uncachedIops:20000,  uncachedMbps:468},
            "Standard_FX24mds": {vcpus:24, mem:504,  maxDisks:32, cachedIops:76800,  cachedMbps:1200, uncachedIops:40000,  uncachedMbps:936},
            "Standard_FX36mds": {vcpus:36, mem:756,  maxDisks:32, cachedIops:115200, cachedMbps:1800, uncachedIops:60000,  uncachedMbps:1404},
            "Standard_FX48mds": {vcpus:48, mem:1008, maxDisks:32, cachedIops:153600, cachedMbps:2400, uncachedIops:80000,  uncachedMbps:1872}
        },
        // ===== FX v2 family (Intel Emerald Rapids, compute-optimized) =====
        // Schema: {local, remote} sub-objects feeding normalizeVm(); local=null for sizes with no temp disk.
        "FXmsv2": {
            "Standard_FX2ms_v2":  {vcpus:2,  mem:42,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:8000,   uncachedMbpsPremium:273,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_FX4ms_v2":  {vcpus:4,  mem:84,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:16000,  uncachedMbpsPremium:545,   uncachedIopsBurstPremium:65000,  uncachedMbpsBurstPremium:1800}},
            "Standard_FX8ms_v2":  {vcpus:8,  mem:168,  local:null, remote:{maxDataDisks:24, uncachedIopsPremium:33000,  uncachedMbpsPremium:1091,  uncachedIopsBurstPremium:65000,  uncachedMbpsBurstPremium:1800}},
            "Standard_FX12ms_v2": {vcpus:12, mem:252,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:49500,  uncachedMbpsPremium:1636,  uncachedIopsBurstPremium:67500,  uncachedMbpsBurstPremium:2400}},
            "Standard_FX16ms_v2": {vcpus:16, mem:336,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:66000,  uncachedMbpsPremium:2182,  uncachedIopsBurstPremium:70000,  uncachedMbpsBurstPremium:3000}},
            "Standard_FX24ms_v2": {vcpus:24, mem:504,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:98000,  uncachedMbpsPremium:3273,  uncachedIopsBurstPremium:105000, uncachedMbpsBurstPremium:4500}},
            "Standard_FX32ms_v2": {vcpus:32, mem:672,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:130000, uncachedMbpsPremium:4364,  uncachedIopsBurstPremium:140000, uncachedMbpsBurstPremium:6000}},
            "Standard_FX48ms_v2": {vcpus:48, mem:1008, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:190000, uncachedMbpsPremium:6545,  uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:9000}},
            "Standard_FX64ms_v2": {vcpus:64, mem:1344, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:220000, uncachedMbpsPremium:8727,  uncachedIopsBurstPremium:230000, uncachedMbpsBurstPremium:9750}},
            "Standard_FX96ms_v2": {vcpus:96, mem:1832, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:260000, uncachedMbpsPremium:10000, uncachedIopsBurstPremium:260000, uncachedMbpsBurstPremium:10625}}
        },
        "FXmdsv2": {
            "Standard_FX2mds_v2":  {vcpus:2,  mem:42,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:180,   tempIopsRW:15000,   tempMbpsRW:90},     remote:{maxDataDisks:8,  uncachedIopsPremium:8000,   uncachedMbpsPremium:273,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_FX4mds_v2":  {vcpus:4,  mem:84,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:360,   tempIopsRW:30000,   tempMbpsRW:180},    remote:{maxDataDisks:12, uncachedIopsPremium:16000,  uncachedMbpsPremium:545,   uncachedIopsBurstPremium:65000,  uncachedMbpsBurstPremium:1800}},
            "Standard_FX8mds_v2":  {vcpus:8,  mem:168,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:720,   tempIopsRW:60000,   tempMbpsRW:360},    remote:{maxDataDisks:24, uncachedIopsPremium:33000,  uncachedMbpsPremium:1091,  uncachedIopsBurstPremium:65000,  uncachedMbpsBurstPremium:1800}},
            "Standard_FX12mds_v2": {vcpus:12, mem:252,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440,  tempIopsRW:120000,  tempMbpsRW:720},    remote:{maxDataDisks:48, uncachedIopsPremium:49500,  uncachedMbpsPremium:1636,  uncachedIopsBurstPremium:67500,  uncachedMbpsBurstPremium:2400}},
            "Standard_FX16mds_v2": {vcpus:16, mem:336,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:1440,  tempIopsRW:120000,  tempMbpsRW:720},    remote:{maxDataDisks:48, uncachedIopsPremium:66000,  uncachedMbpsPremium:2182,  uncachedIopsBurstPremium:70000,  uncachedMbpsBurstPremium:3000}},
            "Standard_FX24mds_v2": {vcpus:24, mem:504,  local:{maxTempDisks:3, tempDiskGiB:440,  tempIopsRR:450000,  tempMbpsRR:2160,  tempIopsRW:180000,  tempMbpsRW:1080},   remote:{maxDataDisks:48, uncachedIopsPremium:98000,  uncachedMbpsPremium:3273,  uncachedIopsBurstPremium:105000, uncachedMbpsBurstPremium:4500}},
            "Standard_FX32mds_v2": {vcpus:32, mem:672,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:2880,  tempIopsRW:240000,  tempMbpsRW:1440},   remote:{maxDataDisks:64, uncachedIopsPremium:130000, uncachedMbpsPremium:4364,  uncachedIopsBurstPremium:140000, uncachedMbpsBurstPremium:6000}},
            "Standard_FX48mds_v2": {vcpus:48, mem:1008, local:{maxTempDisks:6, tempDiskGiB:440,  tempIopsRR:900000,  tempMbpsRR:4320,  tempIopsRW:360000,  tempMbpsRW:2160},   remote:{maxDataDisks:64, uncachedIopsPremium:190000, uncachedMbpsPremium:6545,  uncachedIopsBurstPremium:200000, uncachedMbpsBurstPremium:9000}},
            "Standard_FX64mds_v2": {vcpus:64, mem:1344, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:5760,  tempIopsRW:480000,  tempMbpsRW:2880},   remote:{maxDataDisks:64, uncachedIopsPremium:220000, uncachedMbpsPremium:8727,  uncachedIopsBurstPremium:230000, uncachedMbpsBurstPremium:9750}},
            "Standard_FX96mds_v2": {vcpus:96, mem:1832, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:8640,  tempIopsRW:720000,  tempMbpsRW:4320},   remote:{maxDataDisks:64, uncachedIopsPremium:260000, uncachedMbpsPremium:10000, uncachedIopsBurstPremium:260000, uncachedMbpsBurstPremium:10625}}
        },
        // ===== v6 F-family (AMD EPYC 9004 Genoa, compute-optimized) =====
        // Schema: {local, remote} sub-objects feeding normalizeVm(); local=null for sizes with no temp disk.
        "Fasv6": {
            "Standard_F2as_v6":  {vcpus:2,  mem:8,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F4as_v6":  {vcpus:4,  mem:16,  local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F8as_v6":  {vcpus:8,  mem:32,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F16as_v6": {vcpus:16, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F32as_v6": {vcpus:32, mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:57600,  uncachedMbpsBurstPremium:1700}},
            "Standard_F48as_v6": {vcpus:48, mem:192, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:86400,  uncachedMbpsBurstPremium:2550}},
            "Standard_F64as_v6": {vcpus:64, mem:256, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:115200, uncachedMbpsBurstPremium:3400}}
        },
        "Falsv6": {
            "Standard_F2als_v6":  {vcpus:2,  mem:4,   local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F4als_v6":  {vcpus:4,  mem:8,   local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F8als_v6":  {vcpus:8,  mem:16,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F16als_v6": {vcpus:16, mem:32,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F32als_v6": {vcpus:32, mem:64,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:57600,  uncachedMbpsBurstPremium:1700}},
            "Standard_F48als_v6": {vcpus:48, mem:96,  local:null, remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:86400,  uncachedMbpsBurstPremium:2550}},
            "Standard_F64als_v6": {vcpus:64, mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:115200, uncachedMbpsBurstPremium:3400}}
        },
        "Famsv6": {
            "Standard_F2ams_v6":  {vcpus:2,  mem:16,  local:null, remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,    uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F4ams_v6":  {vcpus:4,  mem:32,  local:null, remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F8ams_v6":  {vcpus:8,  mem:64,  local:null, remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F16ams_v6": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,   uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_F32ams_v6": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440,  uncachedIopsBurstPremium:57600,  uncachedMbpsBurstPremium:1700}},
            "Standard_F48ams_v6": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160,  uncachedIopsBurstPremium:86400,  uncachedMbpsBurstPremium:2550}},
            "Standard_F64ams_v6": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880,  uncachedIopsBurstPremium:115200, uncachedMbpsBurstPremium:3400}}
        },
        // ===== v7 F-family (AMD EPYC 9005 Turin, compute-optimized) =====
        "Fasv7": {
            "Standard_F1as_v7":  {vcpus:1,  mem:4,   local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_F2as_v7":  {vcpus:2,  mem:8,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F4as_v7":  {vcpus:4,  mem:16,  local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F8as_v7":  {vcpus:8,  mem:32,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_F16as_v7": {vcpus:16, mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_F32as_v7": {vcpus:32, mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_F48as_v7": {vcpus:48, mem:192, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_F64as_v7": {vcpus:64, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_F80as_v7": {vcpus:80, mem:320, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Fadsv7": {
            "Standard_F1ads_v7":  {vcpus:1,  mem:4,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:280,   tempIopsRW:15000,   tempMbpsRW:140},     remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_F2ads_v7":  {vcpus:2,  mem:8,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:560,   tempIopsRW:30000,   tempMbpsRW:280},     remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F4ads_v7":  {vcpus:4,  mem:16,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:1120,  tempIopsRW:60000,   tempMbpsRW:560},     remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F8ads_v7":  {vcpus:8,  mem:32,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:2240,  tempIopsRW:120000,  tempMbpsRW:1120},    remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_F16ads_v7": {vcpus:16, mem:64,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:4480,  tempIopsRW:240000,  tempMbpsRW:2240},    remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_F32ads_v7": {vcpus:32, mem:128, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:8960,  tempIopsRW:480000,  tempMbpsRW:4480},    remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_F48ads_v7": {vcpus:48, mem:192, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:13440, tempIopsRW:720000,  tempMbpsRW:6720},    remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_F64ads_v7": {vcpus:64, mem:256, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:17920, tempIopsRW:960000,  tempMbpsRW:8960},    remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_F80ads_v7": {vcpus:80, mem:320, local:{maxTempDisks:4, tempDiskGiB:2200, tempIopsRR:3000000, tempMbpsRR:22400, tempIopsRW:1200000, tempMbpsRW:11200},   remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Famsv7": {
            "Standard_F1ams_v7":  {vcpus:1,  mem:8,   local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_F2ams_v7":  {vcpus:2,  mem:16,  local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F4ams_v7":  {vcpus:4,  mem:32,  local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F8ams_v7":  {vcpus:8,  mem:64,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_F16ams_v7": {vcpus:16, mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_F32ams_v7": {vcpus:32, mem:256, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_F48ams_v7": {vcpus:48, mem:384, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_F64ams_v7": {vcpus:64, mem:512, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_F80ams_v7": {vcpus:80, mem:640, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Famdsv7": {
            "Standard_F1amds_v7":  {vcpus:1,  mem:8,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:280,   tempIopsRW:15000,   tempMbpsRW:140},     remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_F2amds_v7":  {vcpus:2,  mem:16,  local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:560,   tempIopsRW:30000,   tempMbpsRW:280},     remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F4amds_v7":  {vcpus:4,  mem:32,  local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:1120,  tempIopsRW:60000,   tempMbpsRW:560},     remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F8amds_v7":  {vcpus:8,  mem:64,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:2240,  tempIopsRW:120000,  tempMbpsRW:1120},    remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_F16amds_v7": {vcpus:16, mem:128, local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:4480,  tempIopsRW:240000,  tempMbpsRW:2240},    remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_F32amds_v7": {vcpus:32, mem:256, local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:8960,  tempIopsRW:480000,  tempMbpsRW:4480},    remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_F48amds_v7": {vcpus:48, mem:384, local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:13440, tempIopsRW:720000,  tempMbpsRW:6720},    remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_F64amds_v7": {vcpus:64, mem:512, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:17920, tempIopsRW:960000,  tempMbpsRW:8960},    remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_F80amds_v7": {vcpus:80, mem:640, local:{maxTempDisks:4, tempDiskGiB:2200, tempIopsRR:3000000, tempMbpsRR:22400, tempIopsRW:1200000, tempMbpsRW:11200},   remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Falsv7": {
            "Standard_F1als_v7":  {vcpus:1,  mem:2,   local:null, remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_F2als_v7":  {vcpus:2,  mem:4,   local:null, remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F4als_v7":  {vcpus:4,  mem:8,   local:null, remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F8als_v7":  {vcpus:8,  mem:16,  local:null, remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_F16als_v7": {vcpus:16, mem:32,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_F32als_v7": {vcpus:32, mem:64,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_F48als_v7": {vcpus:48, mem:96,  local:null, remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_F64als_v7": {vcpus:64, mem:128, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_F80als_v7": {vcpus:80, mem:160, local:null, remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        },
        "Faldsv7": {
            "Standard_F1alds_v7":  {vcpus:1,  mem:2,   local:{maxTempDisks:1, tempDiskGiB:110,  tempIopsRR:37500,   tempMbpsRR:280,   tempIopsRW:15000,   tempMbpsRW:140},     remote:{maxDataDisks:10, uncachedIopsPremium:4000,   uncachedMbpsPremium:118,   uncachedIopsBurstPremium:44000,  uncachedMbpsBurstPremium:1412}},
            "Standard_F2alds_v7":  {vcpus:2,  mem:4,   local:{maxTempDisks:1, tempDiskGiB:220,  tempIopsRR:75000,   tempMbpsRR:560,   tempIopsRW:30000,   tempMbpsRW:280},     remote:{maxDataDisks:12, uncachedIopsPremium:8000,   uncachedMbpsPremium:234,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F4alds_v7":  {vcpus:4,  mem:8,   local:{maxTempDisks:1, tempDiskGiB:440,  tempIopsRR:150000,  tempMbpsRR:1120,  tempIopsRW:60000,   tempMbpsRW:560},     remote:{maxDataDisks:26, uncachedIopsPremium:16000,  uncachedMbpsPremium:468,   uncachedIopsBurstPremium:47200,  uncachedMbpsBurstPremium:1412}},
            "Standard_F8alds_v7":  {vcpus:8,  mem:16,  local:{maxTempDisks:2, tempDiskGiB:440,  tempIopsRR:300000,  tempMbpsRR:2240,  tempIopsRW:120000,  tempMbpsRW:1120},    remote:{maxDataDisks:48, uncachedIopsPremium:32000,  uncachedMbpsPremium:936,   uncachedIopsBurstPremium:72700,  uncachedMbpsBurstPremium:1412}},
            "Standard_F16alds_v7": {vcpus:16, mem:32,  local:{maxTempDisks:4, tempDiskGiB:440,  tempIopsRR:600000,  tempMbpsRR:4480,  tempIopsRW:240000,  tempMbpsRW:2240},    remote:{maxDataDisks:64, uncachedIopsPremium:64000,  uncachedMbpsPremium:1872,  uncachedIopsBurstPremium:94400,  uncachedMbpsBurstPremium:1916}},
            "Standard_F32alds_v7": {vcpus:32, mem:64,  local:{maxTempDisks:4, tempDiskGiB:880,  tempIopsRR:1200000, tempMbpsRR:8960,  tempIopsRW:480000,  tempMbpsRW:4480},    remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:3744,  uncachedIopsBurstPremium:132000, uncachedMbpsBurstPremium:3832}},
            "Standard_F48alds_v7": {vcpus:48, mem:96,  local:{maxTempDisks:6, tempDiskGiB:880,  tempIopsRR:1800000, tempMbpsRR:13440, tempIopsRW:720000,  tempMbpsRW:6720},    remote:{maxDataDisks:64, uncachedIopsPremium:192000, uncachedMbpsPremium:5663,  uncachedIopsBurstPremium:192500, uncachedMbpsBurstPremium:5749}},
            "Standard_F64alds_v7": {vcpus:64, mem:128, local:{maxTempDisks:4, tempDiskGiB:1760, tempIopsRR:2400000, tempMbpsRR:17920, tempIopsRW:960000,  tempMbpsRW:8960},    remote:{maxDataDisks:64, uncachedIopsPremium:204800, uncachedMbpsPremium:7488,  uncachedIopsBurstPremium:225280, uncachedMbpsBurstPremium:7663}},
            "Standard_F80alds_v7": {vcpus:80, mem:160, local:{maxTempDisks:4, tempDiskGiB:2200, tempIopsRR:3000000, tempMbpsRR:22400, tempIopsRW:1200000, tempMbpsRW:11200},   remote:{maxDataDisks:64, uncachedIopsPremium:212000, uncachedMbpsPremium:10344, uncachedIopsBurstPremium:242640, uncachedMbpsBurstPremium:11410}}
        }
    },
    "Storage Optimized": {
        // ===== L-family v4 (storage-optimized, NVMe) =====
        "Laosv4": {
            "Standard_L2aos_v4":  {vcpus:2,  mem:16,  local:{maxTempDisks:3,  tempDiskGiB:480,  tempIopsRR:180000,  tempMbpsRR:1100, tempIopsRW:72000,   tempMbpsRW:550},   remote:{maxDataDisks:4,  uncachedIopsPremium:4400,   uncachedMbpsPremium:150,  uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L4aos_v4":  {vcpus:4,  mem:32,  local:{maxTempDisks:3,  tempDiskGiB:960,  tempIopsRR:360000,  tempMbpsRR:2200, tempIopsRW:144000,  tempMbpsRW:1100},  remote:{maxDataDisks:8,  uncachedIopsPremium:8800,   uncachedMbpsPremium:300,  uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L8aos_v4":  {vcpus:8,  mem:64,  local:{maxTempDisks:6,  tempDiskGiB:960,  tempIopsRR:720000,  tempMbpsRR:4400, tempIopsRW:288000,  tempMbpsRW:2200},  remote:{maxDataDisks:16, uncachedIopsPremium:17600,  uncachedMbpsPremium:600,  uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L12aos_v4": {vcpus:12, mem:96,  local:{maxTempDisks:9,  tempDiskGiB:960,  tempIopsRR:1080000, tempMbpsRR:6600, tempIopsRW:432000,  tempMbpsRW:3300},  remote:{maxDataDisks:32, uncachedIopsPremium:26400,  uncachedMbpsPremium:900,  uncachedIopsBurstPremium:30000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L16aos_v4": {vcpus:16, mem:128, local:{maxTempDisks:6,  tempDiskGiB:1920, tempIopsRR:1440000, tempMbpsRR:8800, tempIopsRW:576000,  tempMbpsRW:4400},  remote:{maxDataDisks:32, uncachedIopsPremium:35200,  uncachedMbpsPremium:1200, uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L24aos_v4": {vcpus:24, mem:192, local:{maxTempDisks:9,  tempDiskGiB:1920, tempIopsRR:2160000, tempMbpsRR:13200, tempIopsRW:864000, tempMbpsRW:6600},  remote:{maxDataDisks:32, uncachedIopsPremium:52800,  uncachedMbpsPremium:1800, uncachedIopsBurstPremium:60000,  uncachedMbpsBurstPremium:1800}},
            "Standard_L32aos_v4": {vcpus:32, mem:256, local:{maxTempDisks:12, tempDiskGiB:1920, tempIopsRR:2880000, tempMbpsRR:17600, tempIopsRW:1152000, tempMbpsRW:8800}, remote:{maxDataDisks:32, uncachedIopsPremium:70400,  uncachedMbpsPremium:2400, uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2400}}
        },
        "Lasv4": {
            "Standard_L2as_v4":  {vcpus:2,  mem:16,  local:{maxTempDisks:1,  tempDiskGiB:480,  tempIopsRR:137500,  tempMbpsRR:750,  tempIopsRW:55000,   tempMbpsRW:375},   remote:{maxDataDisks:4,  uncachedIopsPremium:4000,   uncachedMbpsPremium:90,   uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L4as_v4":  {vcpus:4,  mem:32,  local:{maxTempDisks:2,  tempDiskGiB:480,  tempIopsRR:275000,  tempMbpsRR:1500, tempIopsRW:110000,  tempMbpsRW:750},   remote:{maxDataDisks:8,  uncachedIopsPremium:7600,   uncachedMbpsPremium:180,  uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L8as_v4":  {vcpus:8,  mem:64,  local:{maxTempDisks:4,  tempDiskGiB:480,  tempIopsRR:550000,  tempMbpsRR:3000, tempIopsRW:220000,  tempMbpsRW:1500},  remote:{maxDataDisks:16, uncachedIopsPremium:15200,  uncachedMbpsPremium:360,  uncachedIopsBurstPremium:20000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L16as_v4": {vcpus:16, mem:128, local:{maxTempDisks:4,  tempDiskGiB:960,  tempIopsRR:1100000, tempMbpsRR:6000, tempIopsRW:440000,  tempMbpsRW:3000},  remote:{maxDataDisks:32, uncachedIopsPremium:30400,  uncachedMbpsPremium:720,  uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L32as_v4": {vcpus:32, mem:256, local:{maxTempDisks:8,  tempDiskGiB:960,  tempIopsRR:2200000, tempMbpsRR:12000, tempIopsRW:880000, tempMbpsRW:6000},  remote:{maxDataDisks:32, uncachedIopsPremium:57600,  uncachedMbpsPremium:1440, uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1700}},
            "Standard_L48as_v4": {vcpus:48, mem:384, local:{maxTempDisks:6,  tempDiskGiB:1920, tempIopsRR:3300000, tempMbpsRR:18000, tempIopsRW:1320000, tempMbpsRW:9000}, remote:{maxDataDisks:32, uncachedIopsPremium:86400,  uncachedMbpsPremium:2160, uncachedIopsBurstPremium:90000,  uncachedMbpsBurstPremium:2550}},
            "Standard_L64as_v4": {vcpus:64, mem:512, local:{maxTempDisks:8,  tempDiskGiB:1920, tempIopsRR:4400000, tempMbpsRR:24000, tempIopsRW:1760000, tempMbpsRW:12000}, remote:{maxDataDisks:32, uncachedIopsPremium:115200, uncachedMbpsPremium:2880, uncachedIopsBurstPremium:120000, uncachedMbpsBurstPremium:3400}},
            "Standard_L80as_v4": {vcpus:80, mem:640, local:{maxTempDisks:10, tempDiskGiB:1920, tempIopsRR:5500000, tempMbpsRR:30000, tempIopsRW:2200000, tempMbpsRW:15000}, remote:{maxDataDisks:32, uncachedIopsPremium:144000, uncachedMbpsPremium:3600, uncachedIopsBurstPremium:147500, uncachedMbpsBurstPremium:4245}},
            "Standard_L96as_v4": {vcpus:96, mem:768, local:{maxTempDisks:12, tempDiskGiB:1920, tempIopsRR:6600000, tempMbpsRR:36000, tempIopsRW:2640000, tempMbpsRW:18000}, remote:{maxDataDisks:32, uncachedIopsPremium:172800, uncachedMbpsPremium:4320, uncachedIopsBurstPremium:175000, uncachedMbpsBurstPremium:5090}}
        },
        "Lsv4": {
            "Standard_L2s_v4":  {vcpus:2,  mem:16,  local:{maxTempDisks:1,  tempDiskGiB:480,  tempIopsRR:137500,  tempMbpsRR:750,  tempIopsRW:55000,   tempMbpsRW:375},   remote:{maxDataDisks:8,  uncachedIopsPremium:3750,   uncachedMbpsPremium:106,  uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L4s_v4":  {vcpus:4,  mem:32,  local:{maxTempDisks:2,  tempDiskGiB:480,  tempIopsRR:275000,  tempMbpsRR:1500, tempIopsRW:110000,  tempMbpsRW:750},   remote:{maxDataDisks:12, uncachedIopsPremium:6400,   uncachedMbpsPremium:212,  uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L8s_v4":  {vcpus:8,  mem:64,  local:{maxTempDisks:4,  tempDiskGiB:480,  tempIopsRR:550000,  tempMbpsRR:3000, tempIopsRW:220000,  tempMbpsRW:1500},  remote:{maxDataDisks:24, uncachedIopsPremium:12800,  uncachedMbpsPremium:424,  uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L16s_v4": {vcpus:16, mem:128, local:{maxTempDisks:4,  tempDiskGiB:960,  tempIopsRR:1100000, tempMbpsRR:6000, tempIopsRW:440000,  tempMbpsRW:3000},  remote:{maxDataDisks:48, uncachedIopsPremium:25600,  uncachedMbpsPremium:848,  uncachedIopsBurstPremium:40000,  uncachedMbpsBurstPremium:1250}},
            "Standard_L32s_v4": {vcpus:32, mem:256, local:{maxTempDisks:8,  tempDiskGiB:960,  tempIopsRR:2200000, tempMbpsRR:12000, tempIopsRW:880000, tempMbpsRW:6000},  remote:{maxDataDisks:64, uncachedIopsPremium:51200,  uncachedMbpsPremium:1696, uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:1696}},
            "Standard_L48s_v4": {vcpus:48, mem:384, local:{maxTempDisks:6,  tempDiskGiB:1920, tempIopsRR:3300000, tempMbpsRR:18000, tempIopsRW:1320000, tempMbpsRW:9000}, remote:{maxDataDisks:64, uncachedIopsPremium:76800,  uncachedMbpsPremium:2544, uncachedIopsBurstPremium:80000,  uncachedMbpsBurstPremium:2544}},
            "Standard_L64s_v4": {vcpus:64, mem:512, local:{maxTempDisks:8,  tempDiskGiB:1920, tempIopsRR:4400000, tempMbpsRR:24000, tempIopsRW:1760000, tempMbpsRW:12000}, remote:{maxDataDisks:64, uncachedIopsPremium:102400, uncachedMbpsPremium:3392, uncachedIopsBurstPremium:102400, uncachedMbpsBurstPremium:3392}},
            "Standard_L80s_v4": {vcpus:80, mem:640, local:{maxTempDisks:10, tempDiskGiB:1920, tempIopsRR:5500000, tempMbpsRR:30000, tempIopsRW:2200000, tempMbpsRW:15000}, remote:{maxDataDisks:64, uncachedIopsPremium:128000, uncachedMbpsPremium:4240, uncachedIopsBurstPremium:128000, uncachedMbpsBurstPremium:4240}},
            "Standard_L96s_v4": {vcpus:96, mem:768, local:{maxTempDisks:12, tempDiskGiB:1920, tempIopsRR:6600000, tempMbpsRR:36000, tempIopsRW:2640000, tempMbpsRW:18000}, remote:{maxDataDisks:64, uncachedIopsPremium:153600, uncachedMbpsPremium:5088, uncachedIopsBurstPremium:153600, uncachedMbpsBurstPremium:5088}}
        },
        // ===== L-family v3 (storage-optimized) =====
        "Lasv3": {
            "Standard_L8as_v3":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:200},
            "Standard_L16as_v3": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:384},
            "Standard_L32as_v3": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:768},
            "Standard_L48as_v3": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1152},
            "Standard_L64as_v3": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1280},
            "Standard_L80as_v3": {vcpus:80, mem:640, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1400}
        },
        "Lsv3": {
            "Standard_L8s_v3":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:290},
            "Standard_L16s_v3": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:600},
            "Standard_L32s_v3": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:865},
            "Standard_L48s_v3": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:76800, uncachedMbps:1315},
            "Standard_L64s_v3": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1735},
            "Standard_L80s_v3": {vcpus:80, mem:640, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000}
        },
        "Lsv2": {
            "Standard_L8s_v2":  {vcpus:8,  mem:64,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:6400,  uncachedMbps:200},
            "Standard_L16s_v2": {vcpus:16, mem:128, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:12800, uncachedMbps:400},
            "Standard_L32s_v2": {vcpus:32, mem:256, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:25600, uncachedMbps:800},
            "Standard_L48s_v2": {vcpus:48, mem:384, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:38400, uncachedMbps:1200},
            "Standard_L64s_v2": {vcpus:64, mem:512, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200, uncachedMbps:1600},
            "Standard_L80s_v2": {vcpus:80, mem:640, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:64000, uncachedMbps:2000}
        }
    },
    "GPU Accelerated": {
        "NCsv3": {
            "Standard_NC6s_v3":   {vcpus:6,  mem:112, maxDisks:12, cachedIops:44000,  cachedMbps:352,  uncachedIops:20000,  uncachedMbps:200},
            "Standard_NC12s_v3":  {vcpus:12, mem:224, maxDisks:24, cachedIops:88000,  cachedMbps:704,  uncachedIops:40000,  uncachedMbps:400},
            "Standard_NC24s_v3":  {vcpus:24, mem:448, maxDisks:32, cachedIops:176000, cachedMbps:1408, uncachedIops:80000,  uncachedMbps:800},
            "Standard_NC24rs_v3": {vcpus:24, mem:448, maxDisks:32, cachedIops:176000, cachedMbps:1408, uncachedIops:80000,  uncachedMbps:800}
        },
        "NDv2": {
            "Standard_ND40rs_v2": {vcpus:40, mem:672, maxDisks:32, cachedIops:80000, cachedMbps:800, uncachedIops:80000, uncachedMbps:800}
        },
        "ND_A100_v4": {
            "Standard_ND96asr_v4":      {vcpus:96, mem:900,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_ND96amsr_A100_v4": {vcpus:96, mem:1924, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000}
        },
        "NGadsV620": {
            "Standard_NG8ads_V620_v1":  {vcpus:8,  mem:16,  maxDisks:8,  cachedIops:0, cachedMbps:0, uncachedIops:12800,  uncachedMbps:200},
            "Standard_NG16ads_V620_v1": {vcpus:16, mem:32,  maxDisks:16, cachedIops:0, cachedMbps:0, uncachedIops:25600,  uncachedMbps:400},
            "Standard_NG32ads_V620_v1": {vcpus:32, mem:64,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:51200,  uncachedMbps:800}
        },
        "NVadsA10v5": {
            "Standard_NV6ads_A10_v5":  {vcpus:6,  mem:55,  maxDisks:4,  cachedIops:10000,  cachedMbps:100,  uncachedIops:6300,   uncachedMbps:93},
            "Standard_NV12ads_A10_v5": {vcpus:12, mem:110, maxDisks:8,  cachedIops:20000,  cachedMbps:200,  uncachedIops:12600,  uncachedMbps:187},
            "Standard_NV18ads_A10_v5": {vcpus:18, mem:220, maxDisks:16, cachedIops:40000,  cachedMbps:400,  uncachedIops:25200,  uncachedMbps:374},
            "Standard_NV36ads_A10_v5": {vcpus:36, mem:440, maxDisks:32, cachedIops:80000,  cachedMbps:800,  uncachedIops:50400,  uncachedMbps:748},
            "Standard_NV72ads_A10_v5": {vcpus:72, mem:880, maxDisks:32, cachedIops:160000, cachedMbps:1600, uncachedIops:100800, uncachedMbps:1496}
        },
        "NVsv3": {
            "Standard_NV12s_v3": {vcpus:12, mem:112, maxDisks:12, cachedIops:20000, cachedMbps:200, uncachedIops:20000, uncachedMbps:200},
            "Standard_NV24s_v3": {vcpus:24, mem:224, maxDisks:24, cachedIops:40000, cachedMbps:400, uncachedIops:40000, uncachedMbps:400},
            "Standard_NV48s_v3": {vcpus:48, mem:448, maxDisks:32, cachedIops:80000, cachedMbps:800, uncachedIops:80000, uncachedMbps:800}
        }
    },
    "FPGA Accelerated": {
        "NPsv1": {
            "Standard_NP10s": {vcpus:10, mem:168, maxDisks:12, cachedIops:0, cachedMbps:0, uncachedIops:12000, uncachedMbps:200},
            "Standard_NP20s": {vcpus:20, mem:336, maxDisks:24, cachedIops:0, cachedMbps:0, uncachedIops:24000, uncachedMbps:400},
            "Standard_NP40s": {vcpus:40, mem:672, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:48000, uncachedMbps:800}
        }
    },
    "High Performance Compute": {
        "HBv3": {
            "Standard_HB120rs_v3":     {vcpus:120, mem:448, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_HB120-96rs_v3":  {vcpus:96,  mem:448, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_HB120-64rs_v3":  {vcpus:64,  mem:448, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_HB120-32rs_v3":  {vcpus:32,  mem:448, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200},
            "Standard_HB120-16rs_v3":  {vcpus:16,  mem:448, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "HC": {
            "Standard_HC44rs": {vcpus:44, mem:352, maxDisks:4, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:1200}
        },
        "HX": {
            "Standard_HX176rs":  {vcpus:176, mem:768,  maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_HX176-144rs": {vcpus:144, mem:768, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_HX176-96rs":  {vcpus:96,  mem:768, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_HX176-48rs":  {vcpus:48,  mem:768, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000},
            "Standard_HX176-24rs":  {vcpus:24,  mem:768, maxDisks:32, cachedIops:0, cachedMbps:0, uncachedIops:80000, uncachedMbps:2000}
        }
    }
};

// ==================== VM DOC URLS (by series) ====================
const VM_DOC_URLS = {
    // General Purpose
    "Dsv3":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dv3-dsv3-series",
    "Dsv5":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dsv5-series",
    "Ddsv5":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/ddsv5-series",
    "Dasv5":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dasv5-series",
    "Av2":        "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/av2-series",
    "Bsv2":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/bsv2-series",
    "Basv2":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/basv2-series",
    "Bpsv2":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/bpsv2-series",
    "DCsv3":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcsv3-series",
    "DCdsv3":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcdsv3-series",
    "DCsv2":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcsv2-series",
    "DCasv5":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcasv5-series",
    "DCadsv5":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcadsv5-series",
    "DCasccv5":   "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcasccv5-series",
    "DCadsccv5":  "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcadsccv5-series",
    "DCasv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcasv6-series",
    "DCadsv6":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcadsv6-series",
    "DCesv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcesv6-series",
    "DCedsv6":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dcedsv6-series",
    // v7 D-family (Intel Granite Rapids + AMD EPYC 9005 Turin)
    "Dsv7":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dsv7-series",
    "Ddsv7":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/ddsv7-series",
    "Dlsv7":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dlsv7-series",
    "Dldsv7":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dldsv7-series",
    "Dasv7":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dasv7-series",
    "Dadsv7":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dadsv7-series",
    "Dalsv7":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dalsv7-series",
    "Daldsv7":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/daldsv7-series",
    // v6 D-family (Intel Emerald Rapids + AMD Genoa EPYC 9004 + Cobalt 100 Arm64)
    "Dsv6":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dsv6-series",
    "Ddsv6":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/ddsv6-series",
    "Dlsv6":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dlsv6-series",
    "Dldsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dldsv6-series",
    "Dasv6":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dasv6-series",
    "Dadsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dadsv6-series",
    "Dalsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dalsv6-series",
    "Daldsv6":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/daldsv6-series",
    "Dpsv6":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dpsv6-series",
    "Dpdsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dpdsv6-series",
    "Dplsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dplsv6-series",
    "Dpldsv6":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dpldsv6-series",
    "Dndsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dndsv6-series",
    "Dnlsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dnlsv6-series",
    "Dnldsv6":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dnldsv6-series",
    "Dnsv6":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/general-purpose/dnsv6-series",
    // Memory Optimized
    "Esv3":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ev3-esv3-series",
    "Esv5":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/esv5-series",
    "Edsv5":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/edsv5-series",
    "Easv4":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/easv4-series",
    "Ebsv5":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ebsv5-series",
    "Ebdsv5":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ebdsv5-series",
    "ECsv5":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecsv5-series",
    "ECdsv5":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecdsv5-series",
    "M":          "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/m-series",
    "Mdsv2-mm":   "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mdsv2-mm-series",
    "Msv2-mm":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/msv2-mm-series",
    "Mv2":        "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mv2-series",
    "Msv3-mm":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/msv3-mm-series",
    "Mdsv3-mm":   "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mdsv3-mm-series",
    "Msv3-hm":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/msv3-hm-series",
    "Mdsv3-hm":   "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mdsv3-hm-series",
    "Mdsv3-vhm":  "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mdsv3-vhm-series",
    "Mbsv3":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mbsv3-series",
    "Mbdsv3":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/mbdsv3-series",
    "Eadsv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/eadsv5-series",
    "Eadsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/eadsv6-series",
    "Eadsv7": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/eadsv7-series",
    "Easv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/easv5-series",
    "Easv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/easv6-series",
    "Easv7": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/easv7-series",
    "Eav4": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/eav4-series",
    "Ebdsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ebdsv6-series",
    "Ebsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ebsv6-series",
    "ECadsccv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecasccv5-ecadsccv5-series",
    "ECadsv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecasv5-ecadsv5-series",
    "ECadsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecadsv6-series",
    "ECasccv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecasccv5-ecadsccv5-series",
    "ECasv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecasv5-ecadsv5-series",
    "ECasv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecasv6-series",
    "ECedsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecedsv6-series",
    "ECesv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ecesv6-series",
    "Edsv4": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/edsv4-series",
    "Edsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/edsv6-series",
    "Edsv7": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/edsv7-series",
    "Edv4": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/edv4-series",
    "Edv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/edv5-series",
    "Endsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/endsv6-series",
    "Ensv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ensv6-series",
    "Epdsv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/epdsv5-series",
    "Epdsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/epdsv6-series",
    "Epsv5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/epsv5-series",
    "Epsv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/epsv6-series",
    "Esv4": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/esv4-series",
    "Esv6": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/esv6-series",
    "Esv7": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/esv7-series",
    "Ev4": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ev4-series",
    "Ev5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/memory-optimized/ev5-series",
    // Compute Optimized
    "Fsv2":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fsv2-series",
    "FX":         "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fx-series",
    "FXmsv2":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fxmsv2-series",
    "FXmdsv2":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fxmdsv2-series",
    // v6 F-family (AMD EPYC 9004 Genoa)
    "Fasv6":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fasv6-series",
    "Falsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/falsv6-series",
    "Famsv6":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/famsv6-series",
    // v7 F-family (AMD EPYC 9005 Turin)
    "Fasv7":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fasv7-series",
    "Fadsv7":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/fadsv7-series",
    "Famsv7":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/famsv7-series",
    "Famdsv7":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/famdsv7-series",
    "Falsv7":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/falsv7-series",
    "Faldsv7":    "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/compute-optimized/faldsv7-series",
    // Storage Optimized
    "Laosv4":     "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/storage-optimized/laosv4-series",
    "Lasv4":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/storage-optimized/lasv4-series",
    "Lsv4":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/storage-optimized/lsv4-series",
    "Lasv3":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/storage-optimized/lasv3-series",
    "Lsv3":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/storage-optimized/lsv3-series",
    "Lsv2":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/storage-optimized/lsv2-series",
    // GPU Accelerated
    "NCsv3":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/ncv3-series",
    "NDv2":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/ndv2-series",
    "ND_A100_v4": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nda100v4-series",
    "NGadsV620":  "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/ngadsv620-series",
    "NVadsA10v5": "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nvadsa10v5-series",
    "NVsv3":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/gpu-accelerated/nvv3-series",
    // FPGA Accelerated
    "NPsv1":      "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/fpga-accelerated/np-series",
    // High Performance Compute
    "HBv3":       "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/high-performance-compute/hbv3-series",
    "HC":         "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/high-performance-compute/hc-series",
    "HX":         "https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/high-performance-compute/hx-series"
};

// ==================== DISK CONTROLLER TYPE (by series) ====================
// Values: "SCSI", "NVMe", "SCSI, NVMe" based on Azure documentation
const DISK_CONTROLLER_TYPE = {
    // General Purpose
    "Dsv3":       "SCSI",
    "Dsv5":       "SCSI",
    "Ddsv5":      "SCSI",
    "Dasv5":      "SCSI",
    "Av2":        "SCSI",
    "Bsv2":       "SCSI",
    "Basv2":      "SCSI",
    "Bpsv2":      "SCSI",
    "DCsv3":      "SCSI",
    "DCdsv3":     "SCSI",
    "DCsv2":      "SCSI",
    "DCasv5":     "SCSI",
    "DCadsv5":    "SCSI",
    "DCasccv5":   "SCSI",
    "DCadsccv5":  "SCSI",
    // DC-family v6 — NVMe per MS Learn
    "DCasv6":     "NVMe",
    "DCadsv6":    "NVMe",
    "DCesv6":     "NVMe",
    "DCedsv6":    "NVMe",
    // v7 D-family — NVMe-only per MS Learn ("This VM series will only work on OS images that support NVMe")
    "Dsv7":       "NVMe",
    "Ddsv7":      "NVMe",
    "Dlsv7":      "NVMe",
    "Dldsv7":     "NVMe",
    "Dasv7":      "NVMe",
    "Dadsv7":     "NVMe",
    "Dalsv7":     "NVMe",
    "Daldsv7":    "NVMe",
    // v6 D-family — NVMe per MS Learn
    "Dsv6":       "NVMe",
    "Ddsv6":      "NVMe",
    "Dlsv6":      "NVMe",
    "Dldsv6":     "NVMe",
    "Dasv6":      "NVMe",
    "Dadsv6":     "NVMe",
    "Dalsv6":     "NVMe",
    "Daldsv6":    "NVMe",
    "Dpsv6":      "NVMe",
    "Dpdsv6":     "NVMe",
    "Dplsv6":     "NVMe",
    "Dpldsv6":    "NVMe",
    "Dndsv6":     "NVMe",
    "Dnlsv6":     "NVMe",
    "Dnldsv6":    "NVMe",
    "Dnsv6":      "NVMe",
    // Memory Optimized
    "Esv3":       "SCSI",
    "Esv5":       "SCSI",
    "Edsv5":      "SCSI",
    "Easv4":      "SCSI",
    "Ebsv5":      "SCSI, NVMe",
    "Ebdsv5":     "SCSI, NVMe",
    "ECsv5":      "SCSI",
    "ECdsv5":     "SCSI",
    "M":          "SCSI",
    "Mdsv2-mm":   "SCSI",
    "Msv2-mm":    "SCSI",
    "Mv2":        "SCSI",
    "Msv3-mm":    "SCSI",
    "Mdsv3-mm":   "SCSI",
    "Msv3-hm":    "SCSI, NVMe",
    "Mdsv3-hm":   "SCSI, NVMe",
    "Mdsv3-vhm":  "SCSI",
    "Mbsv3":      "NVMe",
    "Mbdsv3":     "NVMe",
    "Eadsv5": "SCSI",
    "Eadsv6": "NVMe",
    "Eadsv7": "NVMe",
    "Easv5": "SCSI",
    "Easv6": "NVMe",
    "Easv7": "NVMe",
    "Eav4": "SCSI",
    "Ebdsv6": "NVMe",
    "Ebsv6": "NVMe",
    "ECadsccv5": "SCSI",
    "ECadsv5": "SCSI",
    "ECadsv6": "NVMe",
    "ECasccv5": "SCSI",
    "ECasv5": "SCSI",
    "ECasv6": "NVMe",
    "ECedsv6": "SCSI",
    "ECesv6": "SCSI",
    "Edsv4": "SCSI",
    "Edsv6": "NVMe",
    "Edsv7": "NVMe",
    "Edv4": "SCSI",
    "Edv5": "SCSI",
    "Endsv6": "NVMe",
    "Ensv6": "NVMe",
    "Epdsv5": "SCSI",
    "Epdsv6": "NVMe",
    "Epsv5": "SCSI",
    "Epsv6": "NVMe",
    "Esv4": "SCSI",
    "Esv6": "NVMe",
    "Esv7": "NVMe",
    "Ev4": "SCSI",
    "Ev5": "SCSI",
    // Compute Optimized
    "Fsv2":       "SCSI",
    "FX":         "SCSI",
    "FXmsv2":     "NVMe",
    "FXmdsv2":    "NVMe",
    // v6 F-family — NVMe per MS Learn
    "Fasv6":      "NVMe",
    "Falsv6":     "NVMe",
    "Famsv6":     "NVMe",
    // v7 F-family — NVMe-only per MS Learn
    "Fasv7":      "NVMe",
    "Fadsv7":     "NVMe",
    "Famsv7":     "NVMe",
    "Famdsv7":    "NVMe",
    "Falsv7":     "NVMe",
    "Faldsv7":    "NVMe",
    // Storage Optimized
    "Laosv4":     "NVMe",
    "Lasv4":      "NVMe",
    "Lsv4":       "NVMe",
    "Lasv3":      "SCSI (local NVMe)",
    "Lsv3":       "SCSI (local NVMe)",
    "Lsv2":       "SCSI (local NVMe)",
    // GPU Accelerated
    "NCsv3":      "SCSI",
    "NDv2":       "SCSI",
    "ND_A100_v4": "SCSI",
    "NGadsV620":  "SCSI",
    "NVadsA10v5": "SCSI",
    "NVsv3":      "SCSI",
    // FPGA Accelerated
    "NPsv1":      "SCSI",
    // High Performance Compute
    "HBv3":       "SCSI",
    "HC":         "SCSI",
    "HX":         "SCSI"
};

// ==================== DISK DOC URLS (by disk type) ====================
const DISK_DOC_URLS = {
    "Premium SSD":     "https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd",
    "Standard SSD":    "https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#standard-ssd",
    "Standard HDD":    "https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#standard-hdd",
    "Premium SSD v2":  "https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd-v2",
    "Ultra Disk":      "https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks"
};