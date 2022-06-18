const url = 'https://zlaast.github.io';
const DB = {
    q1: {
        CAT: "Coding",
        ID: "Project Euler",
        SUBID: "1",
        PART: "0",
        TITLE: "Project Euler",
        SUBTITLE: "Multiples of 3 or 5",
        AUTHOR: "Z'Laast Allicock",
        DATE: "2022/06/19",
        IURL: function () {
            return `/posts/${this.ID}/${this.TITLE} ${this.SUBID}/`;
        },
        EURL: function () {
            return [`Project Euler 1@https://projecteuler.net/problem=${this.SUBID}`];
        },
        AUX: "",
        TAGS: [
            "Coding",
            "Project Euler",
            "Python"
        ]
    },
    q2: {
        CAT: "Electronics",
        ID: "Mains Alert",
        SUBID: "1",
        PART: "0",
        TITLE: "Mains Alert",
        SUBTITLE: "Part 1 - Detecting 'the grid' vs a generator",
        AUTHOR: "Z'Laast Allicock",
        DATE: "2022/06/22",
        IURL: function () {
            return `/posts/${this.ID}/${this.ID} ${this.SUBID}/`;
        },
        EURL: function () {
            return '';
        },
        AUX: "",
        TAGS: [
            "Electronics",
            "Mains Alert",
            "Mains (120V)",
            "Arduino",
            "ATTiny",
            "C or C++"
        ]
    },
};
