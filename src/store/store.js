import { createStore } from "vuex";


const store = createStore({
    state: () => ({
        Char: {
            nick: "Lopapopa",
        },


        Skillspecial: [
            {
                name: "Authority",
                count: ""
            },
            {
                name: "Charismatic Leadership",
                count: ""
            },
            {
                name: "Combat Sense",
                count: ""
            },
            {
                name: "Credibility",
                count: ""
            },
            {
                name: "Family",
                count: ""
            },
            {
                name: "Interface",
                count: ""
            },
            {
                name: "Jury Rig",
                count: ""
            },
            {
                name: "Medical Tech",
                count: ""
            },
            {
                name: "Resources",
                count: ""
            },
            {
                name: "Streerdeal",
                count: ""
            },
        ],



        Skillsatr: [
            {
                name: "Personal Crooming",
                count: "",
            },
            {
                name: "Wardrobe & Style",
                count: "",
            }
        ],

        Skillsbody: [
            {
                name: "Endurance",
                count: "",
            },
            {
                name: "Strength Feat",
                count: "",
            },
            {
                name: "Swimming",
                count: "",
            },
        ],

        Skillscool: [
            {
                name: "Interrogation",
                count: "",
            },
            {
                name: "Intimidate",
                count: "",
            },
            {
                name: "Oratory",
                count: "",
            },
            {
                name: "Resist Torture/Drugs",
                count: "",
            },
            {
                name: "Streetwise",
                count: "",
            },
        ],

        Skillsempathy: [
            {
                name: "Human Perception",
                count: "",
            },
            {
                name: "Interview",
                count: "",
            },
            {
                name: "Leadershio",
                count: "",
            },
            {
                name: "Seduction",
                count: "",
            },
            {
                name: "Social",
                count: "",
            },
            {
                name: "Persuasion & Fast Talk",
                count: "",
            },
            {
                name: "Perform",
                count: "",
            },
        ],

        Skillsint: [
            {
                name: "Accounting",
                count: "",
            },
            {
                name: "Antropology",
                count: "",
            },
            {
                name: "Awareness/Notice",
                count: "",
            },
            {
                name: "Biology",
                count: "",
            },
            {
                name: "Botany",
                count: "",
            },
            {
                name: "Chemistry",
                count: "",
            },
            {
                name: "Composition",
                count: "",
            },
            {
                name: "Diagnose illness",
                count: "",
            },
            {
                name: "Education & Gen. Know",
                count: "",
            },
            {
                name: "Expert___",
                count: "",
            },
            {
                name: "Gamble",
                count: "",
            },
            {
                name: "Geology",
                count: "",
            },
            {
                name: "Hide/Evade",
                count: "",
            },
            {
                name: "History",
                count: "",
            },
            {
                name: "Language___",
                count: "",
            },
            {
                name: "Language___",
                count: "",
            },
            {
                name: "Language___",
                count: "",
            },
            {
                name: "Library Search",
                count: "",
            },
            {
                name: "Mathematics",
                count: "",
            },
            {
                name: "Physics",
                count: "",
            },
            {
                name: "Programming",
                count: "",
            },
            {
                name: "Shadow/Track",
                count: "",
            },
            {
                name: "StockMarket",
                count: "",
            },
            {
                name: "System Knowledge",
                count: "",
            },
            {
                name: "Teaching",
                count: "",
            },
            {
                name: "Wilderness Survival",
                count: "",
            },
            {
                name: "Zoology",
                count: "",
            },
        ],

        Skillsref: [
            {
                name: "Archery",
                count: "",
            },
            {
                name: "Athletics",
                count: "",
            },
            {
                name: "Brawling",
                count: "",
            },
            {
                name: "Dance",
                count: "",
            },
            {
                name: "Dodge & Escape",
                count: "",
            },
            {
                name: "Driving",
                count: "",
            },
            {
                name: "Fencing",
                count: "",
            },
            {
                name: "Handgun",
                count: "",
            },
            {
                name: "Heavy Weapons",
                count: "",
            },
            {
                name: "Martial Art 1___",
                count: "",
            },
            {
                name: "Martial Art 2___",
                count: "",
            },
            {
                name: "Martial Art 3___",
                count: "",
            },
            {
                name: "Melee",
                count: "",
            },
            {
                name: "Motorcycle",
                count: "",
            },
            {
                name: "Operate Hvy. Machinery",
                count: "",
            },
            {
                name: "Pilot(Gyro)",
                count: "",
            },
            {
                name: "Pilot(Fixed Wing)",
                count: "",
            },
            {
                name: "Pilot(Dirigible)",
                count: "",
            },
            {
                name: "Pilot(Vect. Thrust Vehicle)",
                count: "",
            },
            {
                name: "Rifle",
                count: "",
            },
            {
                name: "Stealth",
                count: "",
            },
            {
                name: "Submachinegun",
                count: "",
            },
        ],

        Skillstech: [
            {
                name: "Aero Tech",
                count: "",
            },
            {
                name: "AV Tech",
                count: "",
            },
            {
                name: "Basic Tech",
                count: "",
            },
            {
                name: "Cryotank Operation",
                count: "",
            },
            {
                name: "Cyberdeck Design",
                count: "",
            },
            {
                name: "CyberTech",
                count: "",
            },
            {
                name: "Demolitions",
                count: "",
            },
            {
                name: "Disguise",
                count: "",
            },
            {
                name: "Electronics",
                count: "",
            },
            {
                name: "Elect. Security",
                count: "",
            },
            {
                name: "First Aid",
                count: "",
            },
            {
                name: "Forgery",
                count: "",
            },
            {
                name: "GyroTech",
                count: "",
            },
            {
                name: "Paint or Draw",
                count: "",
            },
            {
                name: "Photo & Film",
                count: "",
            },
            {
                name: "Pharmacuticals",
                count: "",
            },
            {
                name: "Pick Lock",
                count: "",
            },
            {
                name: "Pick Pocket",
                count: "",
            },
            {
                name: "Pay Instrument",
                count: "",
            },
            {
                name: "Weaponsmith",
                count: "",
            },
        ],

        Skillsother: [
            {
                name: "",
                count: "",
            },
            {
                name: "",
                count: "",
            },
            {
                name: "",
                count: "",
            },
            {
                name: "",
                count: "",
            },
            {
                name: "",
                count: "",
            },
            {
                name: "",
                count: "",
            },
        ],










        hiddenEmptySkills: false,



        isLoadChar: false,
    }),
    getters: {

    },
    mutations: {
        setNick(state, nick) {
            state.Char.nick = nick;
        },

        hiddenSkillsEmpty(state) {
            if (!state.hiddenEmptySkills) {
                state.hiddenEmptySkills = true;
            } else {
                state.hiddenEmptySkills = false;
            }
        }
    },
    actions: {

    },
    modules: {

    }
});

export default store;