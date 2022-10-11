export const formate = (a:number) => {
    let point = "";
    let x = String(a).replace(/(\.|,)\d+/, function(m){ point = m; return ""; });
    
    x = x.split("").reverse().join("")
        .replace(/(\d{3})/g,"$1 ")
        .split("").reverse().join("");
    return x + point;
    
}

