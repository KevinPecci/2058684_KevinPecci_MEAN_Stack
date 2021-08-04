function storeData() {
    let cName = document.getElementById("clientName").value;
    let pName = document.getElementById("projectName").value;
    let budget = document.getElementById("budget").value;
    projects = JSON.parse(localStorage.getItem("projects") || "[]");
    let project = {cl:cName, pr:pName, bd:budget};
    console.log(JSON.stringify(project));
    projects.push(project);
    localStorage.setItem("projects", JSON.stringify(projects));
}

function displayData() {
    let prjArr = JSON.parse(localStorage.getItem("projects"));
    console.log(localStorage.getItem("projects").length)
    var tableContent="";
    var startTable ="<table border=1><tr><th>Client</th><th>Project</th><th>Budget</th></tr>";

    var total = 0;
    prjArr.forEach(prjJson=>{
        tableContent =tableContent+"<tr><td>"+prjJson.cl+"</td><td>"+prjJson.pr+"</td><td>"+prjJson.bd+"</td></tr>";
        total += +prjJson.bd;
    })

    var endTable="</table>";
    tableContent = startTable+tableContent+endTable+total;
    document.getElementById("main").innerHTML=tableContent;
}

function clearData() {
    document.getElementById('clientName').value = '';
    document.getElementById('projectName').value = '';
    document.getElementById('budget').value = '';
}