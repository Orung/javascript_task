function formChanger(theNumber) {
    let newForm;
    let newArray = [];

    for (let i = 1; i <= theNumber; i++) {
        if ((i % 2) == 0 && (i % 3) == 0 && (i % 5) == 0) {
            newForm = "yu-gi-oh"
        } else if ((i % 2) == 0 && (i % 3) == 0) {
            newForm = "yu-gi"
        } else if ((i % 2) == 0 && (i % 5) == 0) {
            newForm = "yu-oh"
        } else if ((i % 3) == 0 && (i % 5) == 0) {
            newForm = "gi-oh"
        } else if ((i % 2) == 0 || (i % 3) == 0 || (i % 5) == 0) {
            if ((i % 2) == 0) {
                newForm = "yu";
            } else if ((i % 3) == 0) {
                newForm = "gi";
            } else {
                newForm = "oh";
            }
        } else {
            newForm = i
        }

        newArray.push(newForm)

    }
    console.log(newArray)
}

formChanger(30);

