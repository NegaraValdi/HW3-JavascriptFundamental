// Kasus Kondisi Air
let suhu = 0
let air = 
suhu <= 0 && suhu >= -100 ? "Beku" : 
suhu >= 1 && suhu <= 100 ? "Cair" : 
suhu >= 101 && suhu <= 500 ? "Uap" : "Tidak Terdefinisi"
console.log(air)

if (suhu <= 0 && suhu >= -100) {
    air = "Beku"
} else if (suhu >= 1 && suhu <= 100) {
    air = "Cair"
} else if (suhu >= 101 && suhu <= 500) {
    air = "Uap"
} else {
    air = "Tidak Terdefinisi"
}

// Kasus Logika SPBU
let cc = 0
let kendaraan = ""
let plat = ""
let bbm = plat == "kuning" || kendaraan == "motor" ? "BBM Subsidi" : CC < 1500 ? "Pertamax" : "Pertamax Turbo"
console.log(bbm)

if (plat == "kuning" || kendaraan == "motor") {
    bbm = "BBM Subsidi"
} else if (cc < 1500) {
    bbm = "Pertamax"
} else {
    bbm = "Pertamax Turbo"
}