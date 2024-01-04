const chartData = {
    labels: ["Morbi ligula", "Scelerisque", "Prasent maecenas", "Morbi ligula", "Morbi ligula"],
    data: [41, 29, 23, 4, 3],
    backgroundColor: ["#ba69c8", "#ec407a", "#ef6c00", "#ffd741", "#69f0ae"],
  };
  
  const myChart = document.querySelector(".my-chart");
  const ul = document.querySelector(".stats .details ul");
  
  const chart = new Chart(myChart, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          backgroundColor: chartData.backgroundColor,
          label: "   Visitors %",
          data: chartData.data,
        },
      ],
    },
    options: {
      borderWidth: 5,
      borderRadius: 2,
      borderColor: "#181e52",
      hoverBorderWidth: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });


const populateUl = () => {
    chartData.labels.forEach((l, i) => {
      let li = document.createElement("li");
      let span = document.createElement("span");
      span.classList.add('percentage');
      span.setAttribute('data-index', i);
      span.textContent = `${chartData.data[i]}%`;
      span.style.backgroundColor = chartData.backgroundColor[i] || "#181e52"; // Set background color based on index
      li.appendChild(span);
      li.innerHTML += ` ${l}`;
      ul.appendChild(li);
    });
  };

  
  populateUl();