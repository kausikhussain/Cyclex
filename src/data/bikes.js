import { formatINR } from '../utils/formatters';

const bikes = [
  {
    id: "spectra",
    name: "SPECTRA",
    tagline: "2025 FLAGSHIP PERFORMANCE // INDIA EDITION",
    titlePrefix: "Ride The",
    titleAccent: "SPECTRA",
    priceINR: 249999,
    originalPriceINR: 279999,
    depositINR: 9999,
    emiPerMonthINR: 10416,
    priceFormatted: "₹2,49,999",
    originalPriceFormatted: "₹2,79,999",
    depositFormatted: "₹9,999",
    emiFormatted: "₹10,416/month*",
    about: "Engineered for speed, control, and Indian terrain resilience. From urban flyovers to Himalayan gradients, dominate every ride with Spectra.",
    heroImage: "/images/spectra.jpg",
    angleImage: "/images/spectra-angle.jpg",
    verticalImage: "/images/spectra-vertical.jpg",
    frontImage: "/images/spectra-front.jpg",
    accentColor: "#ff9100",
    accentSecondary: "#ff6d00",
    themeClass: "orange",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    btnBg: "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black",
    textGradient: "from-amber-400 via-orange-400 to-amber-200",
    glowColor: "rgba(255, 145, 0, 0.45)",
    bgText: "SPECTRA",
    likes: 917,
    weightCard: {
      weight: "32 lbs",
      weightKg: "14.5 kg",
      label: "APPROX. WEIGHT",
      graphic: "/images/weight-rider-graphic.jpg",
      note: "FEATHERLIGHT FRAME",
      desc: "A carbon monocoque shaves every unnecessary gram, so the Spectra climbs like a hardtail and descends like a downhill rig — without the usual weight trade-off."
    },
    specs: {
      topSpeed: "45",
      topSpeedUnit: "KM/H",
      topSpeedLabel: "TOP SPEED",
      topSpeedDesc: "Built for the ride that pushes back — instant torque and real range mean the Spectra doesn't slow down when the trail gets serious.",
      range: "95",
      rangeUnit: "KM",
      rangeLabel: "RANGE PER CHARGE",
      motorPower: "750",
      motorPowerUnit: "W",
      motorPowerLabel: "MOTOR POWER",
      motorPowerDesc: "A direct drive motor and precision-tuned gearing put every watt straight into forward motion — no lag, no wasted power.",
      torque: "90",
      torqueUnit: "NM",
      torqueLabel: "PEAK TORQUE",
      wheelSize: '29"',
      travel: '160mm',
      weight: '13.2kg',
      drivetrain: '12X',
      drivetrainLabel: 'GEARS / RATIO'
    },
    underTheHood: {
      kicker: "SPECTRA — UNDER THE HOOD",
      title: "Built From the Ground Up",
      description: "Every tube, pivot, and bearing on the Spectra is tuned as one system — not bolted on parts, but a frame designed around how it actually rides. Hydroformed alloy meets a carbon front triangle; reliable mount geometry tested across hundreds of miles of trail — not just a spec sheet.",
      drivetrainCardDesc: "Precision-tuned components built to survive every drop, jump, and switchback. Every drivetrain part is aligned, matched, and dialed in-house before any bike ever leaves the shop floor."
    },
    readyToRide: {
      headline: "Ready to Ride?",
      leftText: "the bike built for those who crave the thrill of the ride and refuse to compromise on performance. With advanced engineering, a rugged frame, and aggressive style, Spectra is ready to conquer any terrain and every trail across India. Experience power, precision, and control like never before.",
      rightText: "backed by a team obsessed with the details. From frame layup to final torque spec, every Spectra is hand-checked before it ships across India. Doorstep unboxing, master mechanic setup, and 5-year frame warranty included."
    },
    indiaAdaptations: [
      {
        id: "monsoon",
        title: "IP67 Monsoon Sealing",
        desc: "Marine-grade hermetic silicone gaskets protect motor stator, battery core, and harness connectors during heavy Indian monsoon rides and water crossings.",
        icon: "Droplets",
        metric: "100% Water-Immersion Tested"
      },
      {
        id: "potholes",
        title: "Adaptive Pothole Compliance",
        desc: "High-volume 29\" Maxxis double-casing tires paired with 160mm Fox suspension absorb harsh road expansion joints, potholes, and broken tarmac with zero rim pinch.",
        icon: "ShieldAlert",
        metric: "160mm Progressive Travel"
      },
      {
        id: "ghats",
        title: "Ghats High-Incline Torque",
        desc: "Calibrated 90Nm mid-drive boost effortlessly conquers 35-degree mountain passes across Western Ghats, Nandi Hills, and Himalayan hairpins.",
        icon: "TrendingUp",
        metric: "90Nm Instant Boost"
      },
      {
        id: "dust",
        title: "Tropical Dust & Heat Armor",
        desc: "Ceramic pivot bearings and multi-fin thermal heat sinks prevent motor and battery throttling even during 45°C peak Indian summer riding.",
        icon: "SunMedium",
        metric: "Up to 50°C Ambient Rated"
      }
    ],
    hotspots: [
      {
        id: "frame",
        title: "Toray T1000 Carbon Monocoque",
        x: 48,
        y: 42,
        category: "CHASSIS",
        desc: "High-modulus continuous fiber layup delivers surgical torsional rigidity while absorbing high-frequency trail and road vibrations."
      },
      {
        id: "suspension",
        title: "Fox Factory 38 Kashima (160mm)",
        x: 68,
        y: 38,
        category: "SUSPENSION",
        desc: "GRIP2 damper with high- and low-speed rebound & compression calibration for unmatched traction on gravel and asphalt."
      },
      {
        id: "motor",
        title: "750W Direct-Drive Hub Powerplant",
        x: 45,
        y: 65,
        category: "POWER",
        desc: "90Nm instantaneous peak torque output with seamless zero-cadence assist and silent magnetic engagement."
      },
      {
        id: "battery",
        title: "720Wh Sub-Chassis Energy Core",
        x: 52,
        y: 52,
        category: "ENERGY",
        desc: "Integrated aerospace-grade lithium cells with dynamic thermal regulation and 45-minute fast-charging from standard Indian 230V 15A wall sockets."
      },
      {
        id: "drivetrain",
        title: "SRAM Eagle AXS 12-Speed Wireless",
        x: 28,
        y: 62,
        category: "TRANSMISSION",
        desc: "Electronic sub-millisecond shifting under maximum pedaling wattage with ceramic pulley bearings."
      },
      {
        id: "brakes",
        title: "Magura MT7 Pro 4-Piston Hydraulic",
        x: 74,
        y: 58,
        category: "BRAKING",
        desc: "203mm floating ventilated rotors providing fade-free emergency braking and alpine descent control."
      }
    ],
    features: [
      {
        title: "Lightning Fast Delivery",
        desc: "Instantaneous 90Nm torque across steep inclines.",
        icon: "Zap"
      },
      {
        title: "Unstoppable Control",
        desc: "Dual-chamber suspension for aggressive terrain stability.",
        icon: "ShieldCheck"
      },
      {
        title: "Featherlight Carbon",
        desc: "Carbon monocoque chassis weighing only 13.2kg.",
        icon: "Feather"
      },
      {
        title: "Precision Telemetry",
        desc: "Sub-millimeter tolerances on every linkage and pivot.",
        icon: "Cpu"
      }
    ],
    techCategories: [
      {
        id: "chassis",
        name: "Aerospace Carbon",
        headline: "Zero Flex. Maximum Compliance.",
        stat: "42%",
        statLabel: "STIFFNESS-TO-WEIGHT INCREASE",
        desc: "Constructed using automated dry-fiber tape placement and high-pressure resin transfer molding to eliminate internal voids and stress risers."
      },
      {
        id: "powertrain",
        name: "Direct Drive Powertrain",
        headline: "90Nm Torque. Zero Latency.",
        stat: "90Nm",
        statLabel: "PEAK TORQUE DELIVERY",
        desc: "Integrated mid-drive brushless motor tuned specifically for immediate power delivery out of steep corners and incline ramps."
      },
      {
        id: "battery",
        name: "High-Density BMS",
        headline: "95+ KM Range on Single Charge.",
        stat: "720Wh",
        statLabel: "CAPACITY WITH THERMAL SHIELD",
        desc: "Custom cylindrical 21700 cell array with internal heat sinks, capable of withstanding extreme Indian heat and monsoon humidity."
      },
      {
        id: "telemetry",
        name: "Cockpit Telemetry",
        headline: "Real-time Power & Cadence Data.",
        stat: "100Hz",
        statLabel: "SENSOR REFRESH FREQUENCY",
        desc: "Ultra-bright OLED integrated top-tube display with Bluetooth sync to Strava, Garmin, and custom mobile companion apps."
      }
    ],
    fullSpecs: [
      {
        category: "FRAME & COCKPIT",
        items: [
          { label: "Frame", value: "Full Carbon Monocoque, 160mm Travel, UDH Compatible, Internal Routing" },
          { label: "Handlebar", value: "RaceFace Next R Carbon, 800mm, 35mm Rise" },
          { label: "Stem", value: "RaceFace Turbine R 35mm, CNC Machined 7075" },
          { label: "Headset", value: "Chris King InSet 2 Integrated Tapered" },
          { label: "Seatpost", value: "Fox Factory Transfer Dropper 175mm Kashima" },
          { label: "Saddle", value: "Ergon SM Pro Carbon Enduro" }
        ]
      },
      {
        category: "SUSPENSION",
        items: [
          { label: "Front Fork", value: "Fox Factory 38 Float GRIP2 29\", 160mm, 44mm Offset" },
          { label: "Rear Shock", value: "Fox Factory Float X2 / DHX2 Coil 205x65 Metric Trunnion" },
          { label: "Linkage", value: "Virtual Pivot Point (VPP) with Enduro MAX Sealed Bearings" }
        ]
      },
      {
        category: "DRIVETRAIN & TRANSMISSION",
        items: [
          { label: "Rear Derailleur", value: "SRAM XX1 Eagle AXS T-Type Wireless 12-Speed" },
          { label: "Shifter", value: "SRAM AXS Pod Controller Ultimate" },
          { label: "Cassette", value: "SRAM XG-1299 Eagle, 10-52T Gold" },
          { label: "Chain", value: "SRAM XX1 Eagle HollowPin FlatTop" },
          { label: "Crankset", value: "e*thirteen Carbon e-Spec Plus 160mm" }
        ]
      },
      {
        category: "BRAKES & STOPPING",
        items: [
          { label: "Brake Calipers", value: "Magura MT7 Pro 4-Piston Carbotecture SL" },
          { label: "Rotors", value: "Magura MDR-P 203mm Front / 203mm Rear Ventilated 6-Bolt" },
          { label: "Levers", value: "Magura HC3 Adjustable 1-Finger Lever" }
        ]
      },
      {
        category: "WHEELS & TIRES",
        items: [
          { label: "Rims", value: "DT Swiss EX 1700 Spline 30mm Internal Width 29\"" },
          { label: "Hubs", value: "DT Swiss 350 Ratchet EXP 36T" },
          { label: "Front Tire", value: "Maxxis Assegai 29x2.50 WT, 3C MaxxGrip, DoubleDown" },
          { label: "Rear Tire", value: "Maxxis Minion DHR II 29x2.40 WT, 3C MaxxTerra, DoubleDown" }
        ]
      },
      {
        category: "E-POWER & CHARGING (INDIA)",
        items: [
          { label: "Motor", value: "Spectra WhisperDrive 750W (90Nm Max Torque)" },
          { label: "Battery", value: "720Wh Integrated Lithium-Ion (Removable with Key Lock)" },
          { label: "Indian Charger", value: "230V 15A 4A Smart Fast Charger (0-80% in 45 min)" },
          { label: "Display", value: "Integrated Matrix OLED with ANT+ / BLE Connectivity" },
          { label: "Water Resistance", value: "IP67 Certified Powertrain & Battery Enclosure" }
        ]
      }
    ]
  },
  {
    id: "ridge",
    name: "RIDGE",
    tagline: "2025 PRO SERIES // INDIA RACE EDITION",
    titlePrefix: "Ride The",
    titleAccent: "RIDGE",
    priceINR: 229999,
    originalPriceINR: 259999,
    depositINR: 9999,
    emiPerMonthINR: 9583,
    priceFormatted: "₹2,29,999",
    originalPriceFormatted: "₹2,59,999",
    depositFormatted: "₹9,999",
    emiFormatted: "₹9,583/month*",
    about: "Precision tuned for razor-sharp handling and raw downhill velocity. Ridge gives you relentless confidence through rock gardens, drops, and alpine switchbacks.",
    heroImage: "/images/ridge.jpg",
    angleImage: "/images/spectra-angle.jpg",
    verticalImage: "/images/spectra-vertical.jpg",
    frontImage: "/images/spectra-front.jpg",
    accentColor: "#ff3b5c",
    accentSecondary: "#e11d48",
    themeClass: "red",
    badgeBg: "bg-red-500/10 border-red-500/30 text-red-400",
    btnBg: "bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white",
    textGradient: "from-red-400 via-rose-400 to-red-200",
    glowColor: "rgba(255, 59, 92, 0.45)",
    bgText: "RIDGE",
    likes: 1240,
    weightCard: {
      weight: "31.4 lbs",
      weightKg: "14.2 kg",
      label: "APPROX. WEIGHT",
      graphic: "/images/weight-rider-graphic.jpg",
      note: "COMPETITION CHASSIS",
      desc: "Ultra-high modulus carbon weave engineered specifically for competitive downhill and enduro riding where every millisecond and gram dictates victory."
    },
    specs: {
      topSpeed: "48",
      topSpeedUnit: "KM/H",
      topSpeedLabel: "TOP SPEED",
      topSpeedDesc: "High-rev motor calibration tuned for aggressive acceleration and instant jump takeoff speeds.",
      range: "100",
      rangeUnit: "KM",
      rangeLabel: "RANGE PER CHARGE",
      motorPower: "800",
      motorPowerUnit: "W",
      motorPowerLabel: "MOTOR POWER",
      motorPowerDesc: "High-efficiency neodymium motor with zero thermal throttling during prolonged high-wattage climbs.",
      torque: "95",
      torqueUnit: "NM",
      torqueLabel: "PEAK TORQUE",
      wheelSize: '29"',
      travel: '165mm',
      weight: '12.9kg',
      drivetrain: '12X',
      drivetrainLabel: 'GEARS / RATIO'
    },
    underTheHood: {
      kicker: "RIDGE — UNDER THE HOOD",
      title: "Built From the Ground Up",
      description: "Optimized geometry with adjustable flip-chip angle. Ridge balances low center of gravity with aggressive 63.5-degree head tube angle for pure alpine domination.",
      drivetrainCardDesc: "Titanium fasteners, ceramic bottom bracket, and cold-forged alloy linkage arms built to withstand the harshest mountain trails."
    },
    readyToRide: {
      headline: "Ready to Ride?",
      leftText: "the competition benchmark for aggressive mountain terrain. Ridge delivers unrivaled agility and explosive acceleration out of every turn across the Indian subcontinent.",
      rightText: "hand-tuned suspension curves and calibrated brake caliper offsets ensure race-ready performance straight out of the crate with nationwide Pan-India service support."
    },
    indiaAdaptations: [
      {
        id: "monsoon",
        title: "IP67 Submersible Sealing",
        desc: "Tested against torrential downpours and flooded urban underpasses with hermetically sealed electronics.",
        icon: "Droplets",
        metric: "100% Water-Immersion Tested"
      },
      {
        id: "potholes",
        title: "ButterCups Trail Isolation",
        desc: "RockShox Charger 3 RC2 with ButterCups dampens 20% of high-frequency road vibrations from broken asphalt.",
        icon: "ShieldAlert",
        metric: "165mm ZEB Ultimate"
      },
      {
        id: "ghats",
        title: "95Nm Incline Dominance",
        desc: "Tuned for continuous torque delivery on high-altitude climbs like Khardung La and Rohtang Pass.",
        icon: "TrendingUp",
        metric: "95Nm High-RPM Stator"
      },
      {
        id: "dust",
        title: "Sealed Cartridge Bearings",
        desc: "Enduro MAX dual-lip labyrinth sealed bearings prevent fine tropical dust contamination.",
        icon: "SunMedium",
        metric: "Labyrinth Double-Lip Seals"
      }
    ],
    hotspots: [
      {
        id: "frame",
        title: "Crimson Monocoque T1000",
        x: 48,
        y: 42,
        category: "CHASSIS",
        desc: "Multi-directional carbon fiber layup with integrated Kevlar down-tube armor against boulder strikes."
      },
      {
        id: "suspension",
        title: "RockShox ZEB Ultimate (165mm)",
        x: 68,
        y: 38,
        category: "SUSPENSION",
        desc: "Charger 3 RC2 damper with ButterCups vibration dampening technology."
      },
      {
        id: "motor",
        title: "800W Pro-Series Mid-Drive",
        x: 45,
        y: 65,
        category: "POWER",
        desc: "95Nm torque with 4 custom power curves selectable on-the-fly via handlebar remote."
      },
      {
        id: "battery",
        title: "750Wh Quick-Release Core",
        x: 52,
        y: 52,
        category: "ENERGY",
        desc: "Rapid swappable battery cartridge with waterproof magnetic seal."
      },
      {
        id: "drivetrain",
        title: "Shimano XTR Di2 12-Speed",
        x: 28,
        y: 62,
        category: "TRANSMISSION",
        desc: "Hyperglide+ technology enabling instantaneous up- and down-shifts under 500W rider load."
      },
      {
        id: "brakes",
        title: "Shimano Saint Quad-Piston",
        x: 74,
        y: 58,
        category: "BRAKING",
        desc: "Ice-Tech finned metallic pads with 203mm Freeza rotors for zero brake fade."
      }
    ],
    features: [
      {
        title: "Explosive Boost",
        desc: "Overclocked 800W peak motor output.",
        icon: "Zap"
      },
      {
        title: "Race-Bred Chassis",
        desc: "Reinforced headtube and rear triangle for extreme G-forces.",
        icon: "ShieldCheck"
      },
      {
        title: "Ultralight Monocoque",
        desc: "Only 12.9kg chassis weight.",
        icon: "Feather"
      },
      {
        title: "Dynamic Telemetry",
        desc: "Live g-force, cadence, and gradient recording.",
        icon: "Cpu"
      }
    ],
    techCategories: [
      {
        id: "chassis",
        name: "Competition Carbon",
        headline: "Maximum Lateral Rigidity.",
        stat: "48%",
        statLabel: "HEADTUBE STIFFNESS BOOST",
        desc: "High-density compaction molding creates seamless structural junctions capable of absorbing heavy casing."
      },
      {
        id: "powertrain",
        name: "Pro-Series Drive",
        headline: "95Nm High-RPM Power Output.",
        stat: "95Nm",
        statLabel: "PEAK TORQUE OUTPUT",
        desc: "Advanced magnetic stator design with ceramic bearings for minimal friction loss."
      },
      {
        id: "battery",
        name: "Thermal Shield BMS",
        headline: "100 KM on Single Charge.",
        stat: "750Wh",
        statLabel: "BATTERY CAPACITY",
        desc: "Smart multi-cell balancer protects battery health across 1,000+ full discharge cycles in Indian climates."
      },
      {
        id: "telemetry",
        name: "Race Control Hub",
        headline: "Zero-Lag Handlebar Interface.",
        stat: "0.2ms",
        statLabel: "SIGNAL TRANSMISSION TIME",
        desc: "Wireless ANT+ protocol with direct integration to helmet displays and bike computers."
      }
    ],
    fullSpecs: [
      {
        category: "FRAME & COCKPIT",
        items: [
          { label: "Frame", value: "Ridge Pro Series Carbon Monocoque, 165mm Travel, Boost 148" },
          { label: "Handlebar", value: "Renthal Fatbar Carbon 35, 800mm, 30mm Rise" },
          { label: "Stem", value: "Renthal Apex 35mm CNC Machined" },
          { label: "Headset", value: "Cane Creek 110 Series Sealed" },
          { label: "Seatpost", value: "RockShox Reverb AXS Wireless 170mm" },
          { label: "Saddle", value: "SDG Bel-Air V3 Lux-Alloy" }
        ]
      },
      {
        category: "SUSPENSION",
        items: [
          { label: "Front Fork", value: "RockShox ZEB Ultimate Charger 3 RC2 29\", 165mm" },
          { label: "Rear Shock", value: "RockShox Super Deluxe Ultimate Coil RCT" },
          { label: "Linkage", value: "Horst-Link 4-Bar Active Suspension System" }
        ]
      },
      {
        category: "DRIVETRAIN & TRANSMISSION",
        items: [
          { label: "Rear Derailleur", value: "Shimano XTR M9150 Di2 12-Speed Electronic" },
          { label: "Shifter", value: "Shimano SW-M9050 Firebolt" },
          { label: "Cassette", value: "Shimano XTR CS-M9101, 10-51T Micro Spline" },
          { label: "Chain", value: "Shimano CN-M9100 SIL-TEC" },
          { label: "Crankset", value: "RaceFace Next SL Carbon 165mm" }
        ]
      },
      {
        category: "BRAKES & STOPPING",
        items: [
          { label: "Brake Calipers", value: "Shimano Saint BR-M820 4-Piston Ceramic" },
          { label: "Rotors", value: "Shimano RT-MT900 Freeza 203mm Front & Rear" },
          { label: "Levers", value: "Shimano Saint BL-M820 Servo-Wave" }
        ]
      },
      {
        category: "WHEELS & TIRES",
        items: [
          { label: "Rims", value: "Santa Cruz Reserve 30 HD Carbon 29\"" },
          { label: "Hubs", value: "Industry Nine Hydra 690 P.O.E." },
          { label: "Front Tire", value: "Schwalbe Magic Mary Super Gravity 29x2.40 Addix Ultra Soft" },
          { label: "Rear Tire", value: "Schwalbe Big Betty Super Gravity 29x2.40 Addix Soft" }
        ]
      },
      {
        category: "E-POWER & CHARGING (INDIA)",
        items: [
          { label: "Motor", value: "Spectra Pro-Series 800W (95Nm Max Torque)" },
          { label: "Battery", value: "750Wh Removable Lithium-Ion Smart Pack" },
          { label: "Indian Charger", value: "230V 15A 5A Rapid Charger (0-80% in 40 min)" },
          { label: "Display", value: "Stem-Integrated Color TFT Matrix Display" },
          { label: "Water Resistance", value: "IP67 Certified Powertrain Enclosure" }
        ]
      }
    ]
  },
  {
    id: "vortex",
    name: "VORTEX",
    tagline: "2025 EVOLUTION // INDIA HYPER EDITION",
    titlePrefix: "Ride The",
    titleAccent: "VORTEX",
    priceINR: 289999,
    originalPriceINR: 319999,
    depositINR: 9999,
    emiPerMonthINR: 12083,
    priceFormatted: "₹2,89,999",
    originalPriceFormatted: "₹3,19,999",
    depositFormatted: "₹9,999",
    emiFormatted: "₹12,083/month*",
    about: "The ultimate hyper-performance all-mountain predator. Combines maximum battery range with relentless 100Nm torque and adaptive electronic suspension.",
    heroImage: "/images/vortex.jpg",
    angleImage: "/images/spectra-angle.jpg",
    verticalImage: "/images/spectra-vertical.jpg",
    frontImage: "/images/spectra-front.jpg",
    accentColor: "#00e676",
    accentSecondary: "#00c853",
    themeClass: "green",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    btnBg: "bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-black",
    textGradient: "from-emerald-400 via-green-400 to-teal-200",
    glowColor: "rgba(0, 230, 118, 0.45)",
    bgText: "VORTEX",
    likes: 2150,
    weightCard: {
      weight: "32.8 lbs",
      weightKg: "14.8 kg",
      label: "APPROX. WEIGHT",
      graphic: "/images/weight-rider-graphic.jpg",
      note: "ADAPTIVE AI CHASSIS",
      desc: "Integrated micro-valves adjust damper compression 500 times per second based on predictive terrain sensor readings."
    },
    specs: {
      topSpeed: "50",
      topSpeedUnit: "KM/H",
      topSpeedLabel: "TOP SPEED",
      topSpeedDesc: "Unrestricted motor assist with automated cadence synchronization for extreme hill climbs.",
      range: "115",
      rangeUnit: "KM",
      rangeLabel: "RANGE PER CHARGE",
      motorPower: "850",
      motorPowerUnit: "W",
      motorPowerLabel: "MOTOR POWER",
      motorPowerDesc: "Liquid-cooled mid-drive motor providing maximum sustained wattage without heat fatigue.",
      torque: "100",
      torqueUnit: "NM",
      torqueLabel: "PEAK TORQUE",
      wheelSize: '29"',
      travel: '170mm',
      weight: '13.5kg',
      drivetrain: '12X',
      drivetrainLabel: 'GEARS / RATIO'
    },
    underTheHood: {
      kicker: "VORTEX — UNDER THE HOOD",
      title: "Built From the Ground Up",
      description: "Long-travel 170mm platform engineered for riders seeking maximum downhill capability without sacrificing climbing efficiency. Featuring active regenerative descent braking.",
      drivetrainCardDesc: "Ceramic bearings, titanium cassette sprockets, and aerospace CNC linkage links engineered to last a lifetime of aggressive alpine riding."
    },
    readyToRide: {
      headline: "Ready to Ride?",
      leftText: "the apex of mountain bicycle engineering. Vortex redefines the boundaries of range, power, and active terrain adaptation across India.",
      rightText: "each Vortex is dyno-tested and calibrated before departure. Includes 5-year comprehensive frame warranty, doorstep master delivery, and lifetime free OTA firmware updates."
    },
    indiaAdaptations: [
      {
        id: "monsoon",
        title: "IP68 Liquid Immersion Core",
        desc: "Hermetically sealed motor and liquid-cooled stator designed for high-humidity coastal and monsoon resilience.",
        icon: "Droplets",
        metric: "IP68 Certified Core"
      },
      {
        id: "potholes",
        title: "170mm Ohlins RXF38 TTX18",
        desc: "Swedish twin-tube damper eliminates small-bump chatter and absorbs deep potholes without bottom-out harshness.",
        icon: "ShieldAlert",
        metric: "170mm TTX18 Twin-Tube"
      },
      {
        id: "ghats",
        title: "100Nm Liquid-Cooled Power",
        desc: "Continuous peak torque without thermal throttling on non-stop 20km Western Ghats elevation climbs.",
        icon: "TrendingUp",
        metric: "100Nm Sustained Torque"
      },
      {
        id: "dust",
        title: "Labyrinth Sealed Ceramic Hubs",
        desc: "Industry Nine Hydra ceramic hubs with zero-friction labyrinth seals impervious to red dust and sand.",
        icon: "SunMedium",
        metric: "690 Points of Engagement"
      }
    ],
    hotspots: [
      {
        id: "frame",
        title: "Vortex AeroCarbon Matrix",
        x: 48,
        y: 42,
        category: "CHASSIS",
        desc: "Reinforced carbon structure with internal cable routing guides and modular battery dock."
      },
      {
        id: "suspension",
        title: "Ohlins RXF38 m.2 Air (170mm)",
        x: 68,
        y: 38,
        category: "SUSPENSION",
        desc: "TTX18 twin-tube damping system with 3-chamber air spring for butter-smooth small bump compliance."
      },
      {
        id: "motor",
        title: "850W Liquid-Cooled Powerplant",
        x: 45,
        y: 65,
        category: "POWER",
        desc: "100Nm torque powerhouse with active internal micro-cooling fins for zero power degradation."
      },
      {
        id: "battery",
        title: "800Wh Extended Range Matrix",
        x: 52,
        y: 52,
        category: "ENERGY",
        desc: "High energy density solid-state cell architecture delivering up to 115 km of backcountry range."
      },
      {
        id: "drivetrain",
        title: "SRAM XX Eagle Transmission",
        x: 28,
        y: 62,
        category: "TRANSMISSION",
        desc: "Direct-mount hangerless rear derailleur with overload clutch and steel cage armor."
      },
      {
        id: "brakes",
        title: "Hope Tech 4 V4 Hydraulic",
        x: 74,
        y: 58,
        category: "BRAKING",
        desc: "CNC machined T6 aluminium 4-piston calipers with braided stainless steel brake lines."
      }
    ],
    features: [
      {
        title: "Max Torque 100Nm",
        desc: "Master 45-degree alpine gradients with effortless power.",
        icon: "Zap"
      },
      {
        title: "Adaptive Damping",
        desc: "Continuous micro-adjustments for perfect wheel contact.",
        icon: "ShieldCheck"
      },
      {
        title: "Ultra Long Range 115 KM",
        desc: "800Wh energy matrix for all-day backcountry epics.",
        icon: "Feather"
      },
      {
        title: "Liquid Cooling",
        desc: "Thermal stability through sustained high-wattage climbs.",
        icon: "Cpu"
      }
    ],
    techCategories: [
      {
        id: "chassis",
        name: "Hyper-Carbon Layup",
        headline: "Maximum Impact Energy Dissipation.",
        stat: "55%",
        statLabel: "IMPACT RESISTANCE GAIN",
        desc: "Continuous strand carbon nanotube infusion throughout the bottom bracket and headtube junctions."
      },
      {
        id: "powertrain",
        name: "Liquid-Cooled Drive",
        headline: "100Nm Sustained Torque.",
        stat: "100Nm",
        statLabel: "PEAK TORQUE OUTPUT",
        desc: "Integrated phase-change coolant channels keep motor windings at optimal operating temperatures."
      },
      {
        id: "battery",
        name: "Solid-State Core",
        headline: "115 KM Backcountry Range.",
        stat: "800Wh",
        statLabel: "BATTERY CAPACITY",
        desc: "High energy density cell composition enables 20% higher watt-hours in the exact same frame footprint."
      },
      {
        id: "telemetry",
        name: "Neural Ride AI",
        headline: "Predictive Suspension Telemetry.",
        stat: "500Hz",
        statLabel: "TERRAIN SCANNING FREQUENCY",
        desc: "Onboard accelerometers read front wheel impact and prime rear shock damping before rear wheel arrival."
      }
    ],
    fullSpecs: [
      {
        category: "FRAME & COCKPIT",
        items: [
          { label: "Frame", value: "Vortex Evolution Carbon Monocoque, 170mm Travel, Integrated Battery" },
          { label: "Handlebar", value: "OneUp Components Carbon 35, 800mm, 35mm Rise" },
          { label: "Stem", value: "OneUp EDC Integrated Tool Compatible 35mm" },
          { label: "Headset", value: "Acros BlockLock Integrated ZS56" },
          { label: "Seatpost", value: "OneUp Dropper V3 180mm Travel" },
          { label: "Saddle", value: "WTB Volt Titanium Medium" }
        ]
      },
      {
        category: "SUSPENSION",
        items: [
          { label: "Front Fork", value: "Ohlins RXF38 m.2 TTX18 Air 29\", 170mm Travel" },
          { label: "Rear Shock", value: "Ohlins TTX22M.2 Custom Tuned Trunnion Coil" },
          { label: "Linkage", value: "Dual Link Adaptive Kinematics with Titanium Pivot Hardware" }
        ]
      },
      {
        category: "DRIVETRAIN & TRANSMISSION",
        items: [
          { label: "Rear Derailleur", value: "SRAM XX Eagle Transmission Wireless 12-Speed" },
          { label: "Shifter", value: "SRAM AXS Pod Ultimate Controller" },
          { label: "Cassette", value: "SRAM XS-1297 T-Type 10-52T" },
          { label: "Chain", value: "SRAM XX T-Type Flattop Dark Silver" },
          { label: "Crankset", value: "Praxis Carbon e-Crank 160mm" }
        ]
      },
      {
        category: "BRAKES & STOPPING",
        items: [
          { label: "Brake Calipers", value: "Hope Tech 4 V4 Quad Piston CNC Machined" },
          { label: "Rotors", value: "Hope Floating 220mm Front / 203mm Rear" },
          { label: "Levers", value: "Hope Tech 4 Ergonomic with Bite Point Adjust" }
        ]
      },
      {
        category: "WHEELS & TIRES",
        items: [
          { label: "Rims", value: "Crankbrothers Synthesis E-Carbon 29\" Front / 29\" Rear" },
          { label: "Hubs", value: "Industry Nine Hydra 6-Pawl" },
          { label: "Front Tire", value: "Maxxis Assegai 29x2.50 3C MaxxGrip DH Casing" },
          { label: "Rear Tire", value: "Maxxis Minion DHR II 29x2.40 3C MaxxGrip DH Casing" }
        ]
      },
      {
        category: "E-POWER & CHARGING (INDIA)",
        items: [
          { label: "Motor", value: "Spectra Vortex Liquid-Drive 850W (100Nm Max Torque)" },
          { label: "Battery", value: "800Wh Solid-State Energy Matrix" },
          { label: "Indian Charger", value: "230V 15A 6A Ultra-Fast Smart Charger (0-80% in 35 min)" },
          { label: "Display", value: "Flush-Mounted Top Tube Color AMOLED with GPS" },
          { label: "Water Resistance", value: "IP68 Certified Powertrain & Battery Enclosure" }
        ]
      }
    ]
  }
];

export default bikes;
