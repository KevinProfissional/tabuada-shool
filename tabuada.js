document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("#tabuada tbody");

    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = i;
        tr.appendChild(th);

        for (let j = 1; j <= 10; j++) {
            const td = document.createElement("td");
            td.textContent = i * j;
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
});
