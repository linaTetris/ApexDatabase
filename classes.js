class Ship {
    constructor(name, type, manufacturer, variants, apex=[], apexReferenceVariable="") {
        this.id = name.replace(/\-/g, '').replace(/\s+/g, '-').replace(/\'/g, '').replace(/\./g, '').toLowerCase();
        
        this.displayName = name;

        this.type = type; // frigate, destroyer, etc
        this.manufacturer = manufacturer; // dawn, chu, jupiter, noma, antonios, thunderbolt, hayreddin


        this.variants = variants; // ShipVariant[]
        this.variantCount = variants.length;
        
        this.apex = apex;
        this.apexReferenceVariable = apexReferenceVariable;
    }
}


class SuperCap extends Ship {
    constructor(name, type, manufacturer, variants, apex=[], apexReferenceVariable="", modules) {
        super(name, type, manufacturer, variants, apex, apexReferenceVariable);

        this.modules = modules; // array of modules: [[M],[A],[B],[C]]...
        this.moduleCount = modules.length;

        this.slotCount = [];
        for (let i=0; i<this.moduleCount; i++) {
            this.slotCount[i] = this.modules[i].length;
        }
    }
}

class Module {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


class ShipVariant {
    constructor(id, variant, name) {
        this.id = id; // 0, 1, 2 -> A,B,C
        this.variant = variant;
        this.name = name;
    }
}

class ApexGeneral { // general apex stuff, like extra hp.
    constructor(level, hp=null, cruise=null, warp=null, contributor=null, variantProperties=[], maybe=false) { // variantProperties should be an array with length equal to the number of variants (ie for FG300, 3.) each sub-array is ApexUpgrade[]
        this.level = level;
        if (!!hp || hp == 0) {this.hp = hp;}
        if (!!cruise || cruise == 0) {this.cruise = cruise;}
        if (!!warp || warp == 0) {this.warp = warp;}
        if (!!contributor) {this.contributor = contributor;} // name of who posted it

        if (!!variantProperties) {this.variantProperties = variantProperties;} // if no variant properties, nothing should be printed.

        if ((!!hp || hp == 0) && (!!cruise || cruise == 0) && (!!warp || warp == 0) && !!variantProperties) {this.known = true;}
        else {this.known = false;}

        if (maybe) {this.maybe = true;} // this is for ones that have been extrapolated
        else {this.maybe = false;}
    }
}

class ApexSuperCap extends ApexGeneral { // supercap apex
    constructor(level, hp=null, cruise=null, warp=null, contributor=null, variantProperties=[], maybe=false) {
        super(level, hp, cruise, warp, contributor, variantProperties, maybe);

        /*  variantProperties should be an array with length equal to the number of MODULE TYPES
            subarrays will correspond to apex for M1, M2, etc.

            ie for ST59 with a B1 upgrade plus one for C2
                M1 M2 M3          A1 A2 A3        B1 -> this has the upgrade                                                          B2   B2      C1   C2                                                         C3
            [ [[],[],[]] ] ,  [ [[],[],[]] ] , [ [new ApexUpgrade("Nuclear Tipped Missiles", "+1000 DPH to Melon Launcher", [12])] , [] , [] ], [ [] , [new ApexUpgrade("Reinforced Structure", "+1% HP", [2])] , [] ] ]


            so our full one would be (not real btw)
            new ApexSuperCap(8, 69420, 0, 50, "Fake News", [ [[],[],[]] ] ,  [ [[],[],[]] ] , [ [new ApexUpgrade("Nuclear Tipped Missiles", "+1000 DPH to Melon Launcher", [12])] , [] , [] ], [ [] , [new ApexUpgrade("Reinforced Structure", "+1% HP", [2])] , [] ] ])
        */
    }
}

class ApexUpgrade { // tp based stuff, ie Crux Apex 7 with C1/C2 upgrades.
    constructor(name, description, tp) {
        /* array of extra stuff like upgrades. 
            name is the name of enhancement (ie Kernel Structure Enhancement)
            levels is the number of levels this will have - example: at apex 3, the KSE upgrade will be 1
            
            description will give the actual effect of the upgrade: for example, +1% HP for the first one.
                in the future, description should state the effect of each level.
                        
            tp is simply the amount of tp to upgrade to the max. this needs to be implemented in the future.

        */
        this.name = name;
        this.levels = description.length;
        this.description = [];

        for (let i=0; i<description.length; i++) {
            this.description.push({effect: description[i], tp: tp[i]});
        }
    }
}

class Contributor {
    constructor(name, discord="", gameID=0) {
        this.name = name;
        this.discord = discord;
        this.gameID = gameID;
    }
}