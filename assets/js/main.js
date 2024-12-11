function calcDifference() {
    let ageOne = Number(document.querySelector("#ageOne").value);
    let ageTwo = Number(document.querySelector("#ageTwo").value);

    let difference = document.querySelector(".result");

    difference.innerHTML = `<p> ${ageOne - ageTwo} </p>`;
}

// ich könnte oberes auch mit += lösen, dann würde ich im html das p tag "Die Differnez ist" innerhalb des divs haben, das ich mir oben gezogen habe....so wird dann das weitre p tag aus der funktion hinzugefügt anstatt das andere p tag zu ersetzen

// so wie ichs jetzt gemacht habe, habe ich das erste p tag ausserhalb des div containers