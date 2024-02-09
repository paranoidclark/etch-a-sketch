function sixteenGrids(gridNum) {
    let mainDiv = document.querySelector('.main')
    let mainDivWidth = 600;
    let mainDivHeight = 600;

    for (let i = 0; i < gridNum; i++) {
        let sketchRow = document.createElement('div')
        let sketchRowWidth = mainDivWidth;
        let sketchRowHeight = mainDivHeight / gridNum;
        sketchRow.style.cssText = "display: flex; box-sizing: border-box; border: 0.2px solid black;"
        sketchRow.style.width = sketchRowWidth + 'px';
        sketchRow.style.height = sketchRowHeight + 'px';
        mainDiv.appendChild(sketchRow)
        for (let j = 0; j < gridNum; j++) {
            let sketchSquare = document.createElement('div')
            let sketchSquareWidth = mainDivWidth / gridNum;
            let sketchSquareHeight = mainDivHeight / gridNum;
            sketchSquare.style.cssText = "box-sizing: border-box; border: 0.2px solid black;"
            sketchSquare.style.width = sketchSquareWidth + 'px';
            sketchSquare.style.height = sketchSquareHeight + 'px';
            sketchSquare.addEventListener("mouseover", function () {
                sketchSquare.style.backgroundColor = '#F8EFBA';
            });
            sketchRow.appendChild(sketchSquare)
        }
    }
}

let gridnum = document.querySelector('#gridnum');
sixteenGrids(gridnum.value)