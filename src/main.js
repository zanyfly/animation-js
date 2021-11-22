let divfirst = document.querySelector("#first");
let style = document.querySelector("#style");

let orignalText = `
/*
先放个歌词
切换 几种身份 自由发挥
不用 举手签到 多方便
藏在 影子里面 那些圣贤
说不对 就不对
出征 不请自来 用他的论点
甚至 还不清楚 你是谁
双眼 盯着瞬间 风往哪边吹
您哪位 我哪位
*/
    div {
    }

    #taiji {
        width:200px;
        height:200px;
        right: 20px;
        top: 20px;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }
    #taiji::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
       }

       #taiji::after {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
       }


`
let i = 0
let outputText = ''
function update() {

    setTimeout(() => {
        if (i < orignalText.length) {
            if (orignalText[i] === "\n") {
                outputText += "<br>"
            } else {
                outputText += orignalText[i]
            }
            style.innerHTML += orignalText[i]
            divfirst.innerHTML = outputText
            window.scrollTo(0, 99999);
            divfirst.scrollTo(0, 99999);
            i += 1
            update()
        }
    }, 0)

}

update()


