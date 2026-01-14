// This script is a centralized point for variables that I must manually change


// URL ENDPOINT
// export const url = "http://localhost:4321"          // Uncomment me when developing locally. Comment me out when deploying
export const url = "https://zlaast.github.io"    // Uncomment me when ready to deploy. Comment me out when developing locally.


// MENU PROGRESS BARS
function percent(num: Number)
{
    return Math.round(Number(num) * 1000) / 10
}

export let project_progress = [
    {
        project: "Project Euler",
        progress: percent(34/978)
    },
    {
        project: "nand2tetris",
        progress: percent(5/14)
    }
]