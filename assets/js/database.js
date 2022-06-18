const url = 'http://192.168.2.210:8080';
const DB = {
    q1: {
        CAT: "Coding",
        ID: "Project Euler",
        SUBID: "1",
        PART: "0",
        TITLE: "Project Euler",
        SUBTITLE: "Multiples of 3 or 5",
        AUTHOR: "Z'Laast Allicock",
        DATE: "2022/06/20",
        IURL: function () {
            return `/posts/${this.ID}/${this.TITLE} ${this.SUBID}/`;
        },
        EURL: function () {
            return [`Project Euler 1@https://projecteuler.net/problem=${this.SUBID}`];
        },
        AUX: "",
        TAGS: [
            "Project Euler",
            "Python"
        ]
    },
};
