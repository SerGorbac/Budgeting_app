var months = [];
var initialdata = {};

document.getElementById("sbmt").addEventListener("click", function(selm) {
  selm.preventDefault();
  const selectedMonth = document.querySelector("#monthslist").value;
  console.log(selectedMonth);
});
document
  .getElementById("yearfield")
  .addEventListener("mouseup" || "mousedown", function(years) {
    var years = document.getElementById("yearfield").value;
    console.log(years);
  });
window.addEventListener("load", function(datacheck) {
  months = retrievedata("timeperiod") || [];
  initialdata = retrievedata("initial") || {};
  if (!months.length && !Object.values(initialdata).length) {
    const datadiv = document.createElement("div");
    datadiv.id = "datdv";
    const electdata = document.createElement("input");
    const hotwaterdata = document.createElement("input");
    const coldwaterdata = document.createElement("input");
    const gasdata = document.createElement("input");
    const button = document.createElement("button");
    button.id = "sbtn";
    const sbtntext = document.createTextNode("Submit data");
    button.appendChild(sbtntext);

    electdata.name = "electricity";
    hotwaterdata.name = "hotWater";
    coldwaterdata.name = "coldWater";
    gasdata.name = "gas";

    electdata.placeholder = "Electricity Counter data";
    hotwaterdata.placeholder = " Hot Water counter data";
    coldwaterdata.placeholder = " Cold Water counter data";
    gasdata.placeholder = "Gas cost";

    datadiv.appendChild(electdata);
    datadiv.appendChild(hotwaterdata);
    datadiv.appendChild(coldwaterdata);
    datadiv.appendChild(gasdata);
    document.body.appendChild(datadiv);
    datadiv.appendChild(button);

    document.getElementById("sbtn").addEventListener("click", function() {
      console.log(document.querySelectorAll("#datadiv input"));
      document.querySelectorAll("#datdv input").forEach(input => {
        console.log(input.name, input.value);
        initialdata = {
          ...initialdata,
          [input.name]: input.value
        };
      });

      savedata("initial", initialdata);
      document.body.removeChild(document.querySelector("#datdv"));
    });
  }
  document.getElementById("sbmt").addEventListener("click", function() {
    let finaldata = {};
    document.querySelectorAll("#container table").forEach(table => {
      var data = {};
      var key = table.id;
      table.querySelectorAll("input").forEach(input => {
        data = {
          ...data,
          [input.name]: Number(input.value) || 0
        };
      });
      let previousmonth = months.find( (month , index) => {
        let curmonth = new Date(month.date.year + " " + month.date.month);
        let nextmonth = months[index + 1];
        let nextmonthd = new Date (nextmonth.date.year + " " + nextmonth.date.month );
        let inputyear = document.querySelector("#yearfield").value;
        let inputmonth = document.querySelector("#monthslist").value;
        let inputdate = new Date (inputyear + " " + inputmonth);
        return curmonth < inputdate && nextmonthd > inputdate;
      });
      finaldata = {
        ...finaldata,
        [key]: {
          ...data,
          total: data.counter * data.rate + data.period || data.total
        }
      };
    });
    finaldata = {
      ...finaldata,
      date: {
        year: document.getElementById("yearfield").value,

        month: document.getElementById("monthslist").value,
      };
    };
    console.log(finaldata);
    months.push(finaldata);
    months = months.sort((monthone, monthtwo) => {
      let a = new Date(monthone.date.year + " " + monthone.date.month);
      let b = new Date(monthtwo.date.year + " " + monthtwo.date.month);
      return a > b;
    });
    savedata("timeperiod", months);
    gentable();
  });
  gentable();
});

function gentable() {
  document.getElementById("result").innerHTML = "";
  months.forEach(month => {
    const box = document.createElement("section");
    box.classList.add("resultitem");
    Object.entries(month)
      .filter(month => month[0] !== "date")
      .forEach(([key, value]) => {
        const container = document.createElement("div");
        container.id = "fdiv";
        const label = document.createElement("label");
        const expenses = document.createElement("p");
        label.textContent = key;
        expenses.textContent = value.total;
        container.appendChild(label);
        container.appendChild(expenses);
        box.appendChild(container);
      });
    document.querySelector("#result").appendChild(box);
  });
}

function savedata(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

function retrievedata(key) {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
}
