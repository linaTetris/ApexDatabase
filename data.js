var ships = [
    // frigates

    new Ship("FG300", "frigate", "dawn", [
        new ShipVariant(0, "Multi-Role Type", "Multi-Role Frigate"),
        new ShipVariant(1, "Armored Type", "Armored Frigate"),
        new ShipVariant(2, "Recon Type", "Recon Frigate")
    ], apex_fg300, "apex_fg300"),
    new Ship("Mare Imbrium", "frigate", "jupiter", [
        new ShipVariant(0, "Railgun Type", "Assault Frigate"),
        new ShipVariant(1, "Pulse Cannon Type", "Experimental Pulse Cannon Frigate")
    ], apex_mare_i, "apex_mare_i"),
    new Ship("Mare Tranquillitatis", "frigate", "jupiter", [
        new ShipVariant(0, "Missile Type", "Missile Frigate"),
        new ShipVariant(1, "Pulse Cannon Type", "Pulse Cannon Frigate"),
        new ShipVariant(2, "Anti-Aircraft Type", "Interceptor Frigate")
    ], apex_mare_t, "apex_mare_t"),
    new Ship("Mare Serenitatis", "frigate", "jupiter", [
        new ShipVariant(0, "Anti-Ship Type", "Heavy Frigate"),
        new ShipVariant(1, "Missile Type", "Missile Frigate"),
        new ShipVariant(2, "Anti-Aircraft Type", "Interceptor Frigate")
    ], apex_mare_s, "apex_mare_s"),
    new Ship("Mare Nubium", "frigate", "jupiter", [
        new ShipVariant(0, "Assault Type", "Light Landing Ship"),
        new ShipVariant(1, "Anti-Aircraft Type", "Anti-Aircraft Frigate")
    ], apex_mare_n, "apex_mare_n"),

    new Ship("XenoStinger", "frigate", "noma", [
        new ShipVariant(0, "Special Type", "Tactical Frigate"),
        new ShipVariant(1, "Anti-Aircraft Type", "Defensive Frigate"),
        new ShipVariant(2, "Landing Type", "UAV Landing Ship")
    ], apex_xeno, "apex_xeno"),

    new Ship("Inostrancevia", "frigate", "noma", [
        new ShipVariant(0, "Defense Type", "Defensive Frigate"),
        new ShipVariant(1, "Offensive Type", "Assault Frigate"),
        new ShipVariant(2, "Special Type", "Onslaught Frigate")
    ], apex_ino, "apex_ino"),

    new Ship("Ruby", "frigate", "noma", [
        new ShipVariant(0, "Railgun Type", "Heavy Railgun Frigate"),
        new ShipVariant(1, "Ion Cannon Type", "Experimental Ion Cannon Frigate"),
        new ShipVariant(2, "Defensive Type", "Heavy Defensive Frigate")
    ], apex_ruby, "apex_ruby"),

    new Ship("NOMA M470", "frigate", "noma", [
        new ShipVariant(0, "Siege Type", "Heavy Landing Ship"),
        new ShipVariant(1, "Support Type", "Support Frigate"),
        new ShipVariant(2, "Anti-Aircraft Type", "Anti-Aircraft Frigate")
    ], apex_m470, "apex_m470"),

    new Ship("Carilion", "frigate", "antonios", [
        new ShipVariant(0, "Recon Type", "Recon Frigate"),
        new ShipVariant(1, "Heavy Cannon Type", "Heavy Cannon Frigate"),
        new ShipVariant(2, "Special Type", "Special Frigate")
    ], apex_carilion, "apex_carilion"),

    new Ship("Reliat", "frigate", "antonios", [
        new ShipVariant(0, "Anti-Ship Type", "Rapid Torpedo Frigate"),
        new ShipVariant(1, "Torpedo Type", "Tactical Frigate"),
        new ShipVariant(2, "Stealth Type", "Stealth Frigate")
    ], apex_reliat, "apex_reliat"),

    new Ship("Zircon", "frigate", "hayreddin", [
        new ShipVariant(0, "Assault Type", "Assault Frigate"),
        new ShipVariant(1, "Special Type", "Special Frigate"),
    ], apex_zircon, "apex_zircon"),

    // destroyers
    new Ship("AC721", "destroyer", "dawn", [
        new ShipVariant(0, "Generic Type", "Heavy Logistics Destroyer"),
        new ShipVariant(1, "Missile Type", "Heavy Missile Destroyer"),
        new ShipVariant(2, "Ion Cannon Type", "Heavy Ion Cannon Destroyer"),
        new ShipVariant(3, "Aircraft Type", "Heavy Dual-Purpose Assault Ship"),
        new ShipVariant(4, "Hero Ship", "Angulum Nameless"),
    ], apex_ac721, "apex_ac721"),

    new Ship("Eris I", "destroyer", "jupiter", [
        new ShipVariant(0, "Cannon Type", "Maneuver Assault Destroyer"),
        new ShipVariant(1, "Heavy Cannon Type", "Heavy Cannon Destroyer"),
        new ShipVariant(2, "Armored Type", "Armored Destroyer"),
    ], apex_eris, "apex_eris"),

    new Ship("Ceres", "destroyer", "jupiter", [
        new ShipVariant(0, "Aircraft Type", "Aircraft Destroyer"),
        new ShipVariant(1, "Support Type", "Support Destroyer"),
        new ShipVariant(2, "Tactical Type", "Tactical Destroyer"),
    ], apex_ceres, "apex_ceres"),

    new Ship("Quaoar", "destroyer", "jupiter", [
        new ShipVariant(0, "Railgun Type", "Railgun Destroyer"),
        new ShipVariant(1, "Torpedo Type", "Torpedo Destroyer"),
    ], apex_quaoar, "apex_quaoar"),

    new Ship("Taurus", "destroyer", "noma", [
        new ShipVariant(0, "Offensive Type", "Pulse Cannon Destroyer"),
        new ShipVariant(1, "Assault Type", "Assault Destroyer"),
        new ShipVariant(2, "Defensive Type", "Defensive Destroyer"),
    ], apex_taurus, "apex_taurus"),

    new Ship("Tundra", "destroyer", "noma", [
        new ShipVariant(0, "Support Type", "Tactical Destroyer"),
        new ShipVariant(1, "Aircraft Type", "Aircraft Destroyer"),
    ], apex_tundra, "apex_tundra"),

    new Ship("Guardian", "destroyer", "antonios", [
        new ShipVariant(0, "Support Type", "Support Destroyer"),
        new ShipVariant(1, "Dual-Purpose Type", "Dual-Purpose Assault Ship"),
        new ShipVariant(2, "Pulse Cannon Type", "Experimental Pulse Assault Ship"),
    ], apex_guardian, "apex_guardian"),

    new Ship("Winged Hussar", "destroyer", "antonios", [
        new ShipVariant(0, "Anti-Ship Type", "Light Missile Destroyer"),
        new ShipVariant(1, "Integrated Type", "Integrated Missile Destroyer"),
        new ShipVariant(2, "Anti-Aircraft Type", "Area-Denial Anti-Aircraft Destroyer"),
    ], apex_hussar, "apex_hussar"),

    new Ship("Thalassa Fluorite", "destroyer", "hayreddin", [
        new ShipVariant(0, "Anti-Aircraft Type", "Information Destroyer"),
        new ShipVariant(1, "Interference Type", "Electronic Destroyer"),
    ], apex_fluorite, "apex_fluorite"),

    new Ship("Helios", "destroyer", "thunderbolt", [
        new ShipVariant(0, "Generic Type", "Heavy Cannon Assault Ship"),
        new ShipVariant(1, "Tactical Type", "Tactical Assault Ship"),
    ], apex_helios, "apex_helios"),

    new Ship("Vanguard", "destroyer", "chu", [
        new ShipVariant(0, "Landing Type", "Dual-Purpose Assault Ship"),
        new ShipVariant(1, "Aircraft Type", "Aircraft Destroyer"),
    ], apex_vanguard, "apex_vanguard"),

    // cruisers

    new Ship("KCCPV2.0", "cruiser", "dawn", [
        new ShipVariant(0, "Integrated Type", "Light Attack Cruiser"),
        new ShipVariant(1, "Pulse Cannon Type", "Light Pulse Attack Cruiser"),
        new ShipVariant(2, "Railgun Type", "Light Railgun Cruiser"),
        new ShipVariant(3, "Aircraft Type", "Light Aircraft Cruiser"),
    ], apex_kccpv, "apex_kccpv"),

    new Ship("CAS066", "cruiser", "dawn", [
        new ShipVariant(0, "Integrated Type", "Generic Cruiser"),
        new ShipVariant(1, "Artillery Type", "Artillery Cruiser"),
        new ShipVariant(2, "Aircraft Type", "Aircraft Cruiser"),
        new ShipVariant(3, "Support Type", "Auxiliary Cruiser"),
    ], apex_cas, "apex_cas"),

    new Ship("Callisto", "cruiser", "jupiter", [
        new ShipVariant(0, "Torpedo Type", "Cluster Torpedo Raid Ship"),
        new ShipVariant(1, "Anti-Ship Type", "Heavy Torpedo Raid Ship"),
        new ShipVariant(2, "Support Type", "Heavy UAV Cruiser"),
    ], apex_callisto, "apex_callisto"),

    new Ship("Io", "cruiser", "jupiter", [
        new ShipVariant(0, "Ion Cannon Type", "Assault Ion Cannon Cruiser"),
        new ShipVariant(1, "Anti-Ship Type", "High-Speed Ion Cannon Cruiser"),
        new ShipVariant(2, "Siege Type", "Siege Ion Cannon Cruiser"),
    ], apex_io, "apex_io"),

    new Ship("Conamara Chaos", "cruiser", "jupiter", [
        new ShipVariant(0, "Railgun Type", "Railgun Cruiser"),
        new ShipVariant(1, "Plasma Type", "High-Speed Plasma Cruiser"),
    ], apex_conamara, "apex_conamara"),

    new Ship("Chimera", "cruiser", "noma", [
        new ShipVariant(0, "Ballistic Type", "Heavy Cruiser"),
        new ShipVariant(1, "Heavy Cannon Type", "Cannon Cruiser"),
        new ShipVariant(2, "Defensive Type", "Defensive Cruiser"),
    ], apex_chimera, "apex_chimera"),

    new Ship("Light Cone", "cruiser", "noma", [
        new ShipVariant(0, "Generic Type", "Multi-Role Missile Cruiser"),
        new ShipVariant(1, "Anti-Aircraft Type", "Area-Denial Anti-Aircraft Cruiser"),
        new ShipVariant(2, "Assault Type", "Offensive Missile Cruiser"),
    ], apex_lightcone, "apex_lightcone"),

    new Ship("Jaeger", "cruiser", "antonios", [
        new ShipVariant(0, "Support Type", "Heavy Aircraft Cruiser"),
        new ShipVariant(1, "Anti-Ship Type", "Heavy Cannon Cruiser"),
    ], apex_jaeger, "apex_jaeger"),

    new Ship("Predator", "cruiser", "antonios", [
        new ShipVariant(0, "Generic Type", "Aircraft Cruiser"),
        new ShipVariant(1, "Tactical Type", "Tactical Aircraft Cruiser"),
        new ShipVariant(2, "Anti-Aircraft Type", "Anti-Aircraft Cruiser"),
    ], apex_predator, "apex_predator"),

    new Ship("Ranger", "cruiser", "antonios", [
        new ShipVariant(0, "Integrated Type", "Comprehensive Warfare Cruiser"),
        new ShipVariant(1, "Ion Cannon Type", "Heavy Ion Cannon Cruiser"),
    ], apex_ranger, "apex_ranger"),

    // battlecruisers

    new SuperCap("ST59", "battlecruiser", "dawn", [
        new ShipVariant(0, "Ultra Type", "Defensive Battlecruiser"),
    ], apex_st59, "apex_st59", 
        [[new Module("M1", "Assault Railgun System"), new Module("M2", "Bow-Mounted Battery System"), new Module("M3", "Assault Torpedo System")],
        [new Module("A1", "Large Cannon Platform"), new Module("A2", "Railgun Turret Array"), new Module("A3", "Pulse Turret Array")],
        [new Module("B1", "Melon Launcher"), new Module("B2", "Aircraft System"), new Module("B3", "Area Fire-Control System")],
        [new Module("C1", "Additional Armor System"), new Module("C2", "EM Armor System"), new Module("C3", "Heavy Defensive Armor System")]
    ]),

    new SuperCap("Eternal Storm", "battlecruiser", "jupiter", [
        new ShipVariant(0, "Ultra Type", "Attack Battlecruiser"),
    ], apex_es, "apex_es", 
        [[new Module("M1", "\"Viggen\" Ion Generation System"), new Module("M2", "Experimental Plasma Caster")],
        [new Module("A1", "\"Eternal Polaris\" Mk II Projectile Launching System"), new Module("A2", "\"Eternal Polaris\" Mk II Large Projectile Launching System"), new Module("A3", "\"Eternal Polaris\" Mk II Energy Projectile Launching System")],
        [new Module("B1", "Generic Battery System"), new Module("B2", "Generic Close-In Weapon System")],
        [new Module("C1", "NT UAV Anti-Aircraft System"), new Module("C2", "\"Thunderstorm\" UAV Shield System"), new Module("C3", "Energy Compensation Armor System")],
        [new Module("D1", "Ion Turret System"), new Module("D2", "Pulse Turret System")]
    ]),

    new SuperCap("Spear of Uranus", "battlecruiser", "noma", [
        new ShipVariant(0, "Ultra Type", "Heavy Battlecruiser"),
    ], apex_sou, "apex_sou", 
        [[new Module("M1", "Bow Railgun System"), new Module("M2", "Ion Turret System")],
        [new Module("A1", "\"Fortress\" Cannon System A"), new Module("A2", "\"Fortress\" Cannon System B"), new Module("A3", "\"Fortress\" Cannon System F")],
        [new Module("B1", "\"Minecart\" Projectile Launching Array"), new Module("B2", "Corvette Dock"), new Module("B3", "Integrated Damage Control System")],
        [new Module("C1", "Distributed Weapon Control System"), new Module("C2", "Additional Armor System"), new Module("C3", "Anti-Missile System")],
    ]),

    new SuperCap("Shield of Plutus", "battlecruiser", "noma", [
        new ShipVariant(0, "Ultra Type", "Defense Battlecruiser"),
    ], apex_sop, "apex_sop",
        [[new Module("M1", "Integrated Weapon System"), new Module("M2", "Integrated Cannon System"), new Module("M3", "\"Minecart\" Projectile Launching Array")],
        [new Module("A1", "\"Fortress\" Defense System"), new Module("A2", "\"Fortress\" Area Fire-Control System A"), new Module("A3", "\"Fortress\" Area Fire-Control System B")],
        [new Module("B1", "Comprehensive Maintenance System"), new Module("B2", "Additional Armor System"), new Module("B3", "Anti-Missile System")],
        [new Module("C1", "Weapon Multi-Target Counterattack System"), new Module("C2", "Anti-Aircraft Intercept System"), new Module("C3", "Heavy Projectile Weapon System")],
    ]),

    new SuperCap("Constantine the Great", "battlecruiser", "antonios", [
        new ShipVariant(0, "Ultra Type", "Multi-Role Battlecruiser"),
    ], apex_ctg, "apex_ctg",
        [[new Module("M1", "\"Gamma Storm\" Ion Attack System"), new Module("M2", "\"Gamma Storm\" Projectile Attack System")],
        [new Module("A1", "\"Gamma Storm\" Projectile Weapon System"), new Module("A2", "\"Gamma Storm\" Energy Projectile Weapon System")],
        [new Module("B1", "Generic Battery System"), new Module("B2", "Pulse Anti-Aircraft System"), new Module("B2", "Anti-Aircraft Missile System")],
        [new Module("C1", "Additional Energy System"), new Module("C2", "Aircraft Module"), new Module("C3", "Recon UAV System")],
        [new Module("D1", "Short-Range Anti-Aircraft System"), new Module("D2", "Targeted Protection System"), new Module("D3", "Damage Control System")]
    ]),

    new SuperCap("Antontas Swordbearer", "battlecruiser", "antonios", [
        new ShipVariant(0, "Ultra Type", "Command Ship"),
    ], apex_swordbearer, "apex_swordbearer", 
        [[new Module("M1", "\"Swarm\" UAV Combat Center"), new Module("M2", "\"Joint\" UAV Combat Center"), new Module("M3", "\"Sync\" UAV Combat Center"),],
        [new Module("A1", "\"Razor\" Command System"), new Module("A2", "\"Stiletto\" Command System"), new Module("A3", "\"Broadsword\" Command System"),],
        [new Module("B1", "Corvette Loading System"), new Module("B2", "Missile Launching System"), new Module("B2", "Pulse Cannon System")],
        [new Module("C1", "Reinforced Armor System"), new Module("C2", "Electromagnetic Energy Armor"), new Module("C3", "Additional Armor System")],
        [new Module("D1", "Anti-Aircraft Missile System"), new Module("D2", "\"Minecart\" Projectile Launching Array"), new Module("D3", "Missile Launching System")]
    ]),

    new SuperCap("Thunderbolt Star", "battlecruiser", "thunderbolt", [
        new ShipVariant(0, "Ultra Type", "Multi-Role Arsenal Ship"),
    ], apex_tb, "apex_tb", 
        [[new Module("M1", "\"Thunderbolt\" Bow-Mounted Railgun System"), new Module("M2", "\"Thunderbolt\" Bow-Mounted Projectile Weapon System"), new Module("M3", "\"Thunderbolt\" Bow-Mounted High-Energy Weapon System")],
        [new Module("A1", "Rapid-Fire Anti-Ship Weapon System"), new Module("A2", "Medium Anti-Ship Weapon System")],
        [new Module("B1", "Active Anti-Aircraft System"), new Module("B2", "Range Interception System")],
        [new Module("C1", "Weapon Coordination Center"), new Module("C2", "Fire-Control Calibration System")],
        [new Module("D1", "Accurate Projectile Weapon System"), new Module("D2", "Large Projectile Weapon System")],
        [new Module("E1", "Multi-Target Weapon System"), new Module("E2", "Multi-Target Anti-Aircraft System")]
    ]),

    // carriers

    new SuperCap("CV3000", "carrier", "dawn", [
        new ShipVariant(0, "Ultra Type", "High-Speed Carrier"),
    ], apex_cv3k, "apex_cv3k", 
        [[new Module("M1", "Integrated Aircraft Hangar"), new Module("M2", "Integrated Aircraft System"), new Module("M3", "Large Aircraft System")],
        [new Module("A1", "\"Dragoon\" Battery System"), new Module("A2", "Anti-Aircraft Missile Platform")],
        [new Module("B1", "Missile Defense System"), new Module("B2", "Corvette Loading Platform"), new Module("B3", "Info UAV Support Platform"), new Module("B4", "UAV Combat System")]
    ]),

    new SuperCap("Eternal Heavens", "carrier", "jupiter", [
        new ShipVariant(0, "Ultra Type", "UAV Carrier"),
    ], apex_eh, "apex_eh", 
        [[new Module("M1", "Collaborative Hangar I"), new Module("M2", "Collaborative Hangar II"), new Module("M3", "Collaborative Hangar III")],
        [new Module("A1", "Integrated Battery System"), new Module("A2", "Experimental Ion Turret System"), new Module("A3", "Pulse Anti-Aircraft System")],
        [new Module("B1", "Anti-Ship Projectile Launching System"), new Module("B2", "Anti-Missile Defense System"), new Module("B3", "Anti-Aircraft Missile Platform")],
        [new Module("C1", "Auxiliary Aircraft Hangar"), new Module("C2", "Auxiliary Corvette Dockyard"), new Module("C3", "Support Repair UAV System")],
    ]),

    new SuperCap("Solar Whale", "carrier", "noma", [
        new ShipVariant(0, "Ultra Type", "Armed Tactical Carrier"),
    ], apex_sw, "apex_sw",
        [[new Module("M1", "Corvette Dock"), new Module("M2", "Large Aircraft System")],
        [new Module("A1", "Integrated Armory"), new Module("A2", "Projectile Weapon Platform"), new Module("A3", "Integrated Cannon Platform")],
        [new Module("B1", "Ship Maintenance System"), new Module("B2", "Corvette Loading Platform")],
        [new Module("C1", "Aircraft Hangar"), new Module("C2", "Siege UAV System"), new Module("C3", "Anti-Aircraft Missile Platform")],
    ]),

    new SuperCap("Marshal Crux", "carrier", "antonios", [
        new ShipVariant(0, "Ultra Type", "Carrier"),
    ], apex_crux, "apex_crux",
        [[new Module("M1", "\"White Flashing\" Integrated Anti-Ship Armory"), new Module("M2", "\"White Flashing\" Integrated Anti-Aircraft Armory")],
        [new Module("A1", "Integrated Aircraft Hangar"), new Module("A2", "Corvette Dock")],
        [new Module("B1", "Additional Energy System"), new Module("B2", "Fire-Control Auxiliary Calibration System")],
        [new Module("C1", "Additional Aircraft System"), new Module("C2", "Missile Defense System"), new Module("C3", "Recon UAV System")],
    ]),

    // aux

    new SuperCap("FSV830", "auxiliary", "dawn", [
        new ShipVariant(0, "Ultra Type", "Fast Tactical Auxiliary Ship"),
    ], apex_fsv, "apex_fsv", 
        [[new Module("M1", "Integrated Support Platform")],
        [new Module("A1", "Frigates Production System"), new Module("A2", "Corvette Production System"), new Module("A3", "Fighter Production System"),],
        [new Module("B1", "Warning and Control System"), new Module("B2", "Coordinate Command System"), new Module("B3", "Camouflage System"),],
        [new Module("C1", "Engineering Maintenance System"), new Module("C2", "Strategic Resource Storage System")],
        [new Module("D1", "Aircraft System"), new Module("D2", "Repair UAV System")],
        [new Module("E1", "Area-Defense System"), new Module("E2", "Corvette Dock")],
    ]),

    new SuperCap("Ediacaran", "auxiliary", "dawn", [
        new ShipVariant(0, "Ultra Type", "Heavy Firepower Auxiliary Ship"),
    ], apex_ediacaran, "apex_ediacaran",
        [[new Module("M1", "Fortress Bow-Mounted Heavy Cannon System"), new Module("M2", "Fortress Assault Railgun System")],
        [new Module("A1", "Frigates Production System"), new Module("A2", "Corvette Production System"), new Module("A3", "Destroyer Production System"),],
        [new Module("B1", "\"Tundra\" Interceptor UAV System"), new Module("B2", "\"Hummingbird\" Firepower Recon UAV System"), new Module("B3", "\"Colossus\" Guard UAV System"),],
        [new Module("C1", "Aircraft Loading System"), new Module("C2", "Corvette Dock")],
        [new Module("D1", "Heavy Additional Armor System"), new Module("D2", "Nano Automated Maintenance System")]
    ]),

    // battleships

    new SuperCap("Warspite", "battleship", "dawn", [
        new ShipVariant(0, "Ultra Type", "Assault Battleship"),
    ], apex_warspite, "apex_warspite", 
        [[new Module("M1", "Bow-Mounted Ion Cannon System"), new Module("M2", "Bow-Mounted High-Energy Bombardment System")],
        [new Module("A1", "Anti-Ship Torpedo System"), new Module("A2", "Projectile Weapon System")],
        [new Module("B1", "Siege Armed System"), new Module("B2", "Siege UAV System"),],
        [new Module("C1", "Experimental Ion Cannon System"), new Module("C2", "Ion Turret System")],
        [new Module("D1", "Medium Anti-Ship Missile"), new Module("D2", "Large Anti-Ship Missile")],
        [new Module("E1", "Standard Sacrum Chu Imperium Armor System"), new Module("E2", "Armor System")],
        [new Module("F1", "Standard Sacrum Chu Imperium Propulsion System"), new Module("F2", "Propulsion System")],
        [new Module("G1", "Ion Enhancement Device"), new Module("G2", "Additional Armor System")],
        [new Module("H1", "Near-Defense Pulse Cannon System"), new Module("H2", "Short Range Anti-Aircraft System")]
    ]),

    // corvettes
    new Ship("CV-II003", "corvette", "dawn", [
        new ShipVariant(0, "Multi-Role Type", "Light Corvette")
    ], apex_cvii003, "apex_cvii003"),

    new Ship("CV-M011", "corvette", "dawn", [
        new ShipVariant(0, "Missile Type", "Heavy Missile Corvette"),
        new ShipVariant(1, "Cannon Type", "Heavy Cannon Corvette"),
        new ShipVariant(2, "High-Speed Type", "High Speed Missile Corvette"),
    ], apex_cvm011, "apex_cvm011"),

    new Ship("CV-T800", "corvette", "dawn", [
        new ShipVariant(0, "Anti-Aircraft Type", "Pulsar Corvette")
    ], apex_t800, "apex_t800"),

    new Ship("S-Levy9", "corvette", "jupiter", [
        new ShipVariant(0, "Anti-Ship Type", "Heavy Torpedo Escort Corvette")
    ], apex_levy, "apex_levy"),

    new Ship("Hale-Bopp", "corvette", "jupiter", [
        new ShipVariant(0, "Multi-Role Type", "System Support Corvette"),
        new ShipVariant(1, "Dock Type", "Repair Support Corvette"),
    ], apex_bopp, "apex_bopp"),

    new Ship("Tempel I", "corvette", "jupiter", [
        new ShipVariant(0, "Interference Type", "Information Corvette"),
        new ShipVariant(1, "Alert Type", "Alert Corvette"),
    ], apex_tempel, "apex_tempel"),

    new Ship("RedBeast 7-13", "corvette", "noma", [
        new ShipVariant(0, "Offensive Type", "Missile Corvette"),
        new ShipVariant(1, "Breacher Type", "Breacher Corvette"),
    ], apex_rb7, "apex_rb7"),

    new Ship("Silent Assassin", "corvette", "noma", [
        new ShipVariant(0, "High-Speed Type", "Armored Corvette"),
        new ShipVariant(1, "Special Type", "Special Corvette"),
    ], apex_ass, "apex_ass"),

    new Ship("Cellular Defender", "corvette", "antonios", [
        new ShipVariant(0, "Multi-Role Type", "Heavy Torpedo Corvette"),
    ], apex_cell, "apex_cell"),

    new Ship("Nebula Chaser", "corvette", "antonios", [
        new ShipVariant(0, "Ballistic Type", "Heavy Corvette"),
        new ShipVariant(1, "Pulse Cannon Type", "Pulsar Corvette"),
    ], apex_nebula, "apex_nebula"),

    new Ship("Void Elfin", "corvette", "antonios", [
        new ShipVariant(0, "Offensive Type", "Stealth Missile Corvette"),
    ], apex_void, "apex_void"),

    new Ship("Wildfire", "corvette", "thunderbolt", [
        new ShipVariant(0, "Defense Type", "Tactical Torpedo Corvette"),
        new ShipVariant(1, "Anti-Aircraft Type", "Dogfight Corvette"),
    ], apex_wildfire, "apex_wildfire"),

    // fighters

    new Ship("SC002", "fighter", "dawn", [
        new ShipVariant(0, "Generic Type", "Quantum Scout"),
    ], apex_sc002, "apex_sc002"),

    new Ship("AT021", "fighter", "dawn", [
        new ShipVariant(0, "Pulse Cannon Type", "Pulse Attacker"),
        new ShipVariant(1, "Interference Type", "Tactical Attacker"),
        new ShipVariant(2, "Multi-Role Type", "Heavy Attacker"),
    ], apex_at021, "apex_at021"),

    new Ship("BR050", "fighter", "dawn", [
        new ShipVariant(0, "Anti-Ship Type", "Standard Bomber"),
        new ShipVariant(1, "Defense Type", "Multi-Role Bomber"),
        new ShipVariant(2, "Torpedo Type", "Torpedo Bomber"),
    ], apex_br050, "apex_br050"),

    new Ship("Stingray", "fighter", "jupiter", [
        new ShipVariant(0, "Stealth Type", "Torpedo Bomber")
    ], apex_stingray, "apex_stingray"),

    new Ship("Janbiya Aer410", "fighter", "jupiter", [
        new ShipVariant(0, "Anti-Ship Type", "Assault Attacker")
    ], apex_janbiya, "apex_janbiya"),

    new Ship("B192 Newland", "fighter", "jupiter", [
        new ShipVariant(0, "Multi-Role Type", "Heavy Attacker")
    ], apex_newland, "apex_newland"),

    new Ship("Spore A404", "fighter", "jupiter", [
        new ShipVariant(0, "Anti-Aircraft Type", "Light Fighter")
    ], apex_spore, "apex_spore"),

    new Ship("Bullfrog", "fighter", "noma", [
        new ShipVariant(0, "Siege Type", "Dual-Purpose Bomber")
    ], apex_bullfrog, "apex_bullfrog"),

    new Ship("Sandrake", "fighter", "noma", [
        new ShipVariant(0, "Dual-Purpose Type", "Atmospheric Interceptor")
    ], apex_sandrake, "apex_sandrake"),

    new Ship("Strix A100", "fighter", "noma", [
        new ShipVariant(0, "Anti-Ship Type", "Joint Attacker")
    ], apex_strix, "apex_strix"),

    new Ship("Vitas-B010", "fighter", "antonios", [
        new ShipVariant(0, "Anti-Ship Type", "Bomber")
    ], apex_vb, "apex_vb"),

    new Ship("Vitas-A021", "fighter", "antonios", [
        new ShipVariant(0, "Anti-Ship Type", "Heavy Attacker")
    ], apex_va, "apex_va"),

    new Ship("Mistral", "fighter", "antonios", [
        new ShipVariant(0, "Anti-Aircraft Type", "Combat Attacker")
    ], apex_mistral, "apex_mistral"),

    new Ship("Balancer Anderson SC020", "fighter", "antonios", [
        new ShipVariant(0, "Interference Type", "Scout")
    ], apex_balancer, "apex_balancer"),

    new Ship("Hayreddin\'s Loyal", "fighter", "hayreddin", [
        new ShipVariant(0, "Special Type", "Pulsar Fighter")
    ], apex_loyal, "apex_loyal"),

    new Ship("Thunderbolt V022", "fighter", "thunderbolt", [
        new ShipVariant(0, "Anti-Aircraft Type", "Light Fighter"),
        new ShipVariant(1, "Special Type", "Special Fighter"),
        new ShipVariant(2, "Interference Type", "Dual-Purpose Fighter"),
    ], apex_v022, "apex_v022"),

    new Ship("A101 the Rational", "fighter", "hayreddin", [
        new ShipVariant(0, "Anti-Ship Type", "Combat Attacker")
    ], apex_rational, "apex_rational"),
];

function getShipById(id) {
    for (i in ships) {
        if (ships[i].id == id) {return ships[i];}
    }
}