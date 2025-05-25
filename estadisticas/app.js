async function loadData() {
  try {
    const jsonData = {
      success: true,
      message: "Estadísticas de la encuesta obtenidas exitosamente",
      data: {
        formGeneralInfo: {
          idEncuesta: 1,
          titulo: "Ambiente laboral",
          descripcion:
            "Esta encuesta busca que... y tambien lograr... aaaaaaaaaaaaa...",
          createdBy: "DAVID DERAS",
          totalRespuestas: 6,
        },
        formStats: [
          {
            idPregunta: 1,
            nombre: "Texto corto",
            type: "short_text",
            shortQuestion: "Pregunta corta 1",
            allowOtherOption: false,
            textResults: [
              "Respuesta de pregunta corta 1",
              "Respuesta de pregunta corta 1",
              "Respuesta de pregunta corta 1",
              "Respuesta de pregunta corta 1",
              "Respuesta de pregunta corta 1",
              "Respuesta de pregunta corta 1",
            ],
            graphData: null,
          },
          {
            idPregunta: 2,
            nombre: "Texto largo",
            type: "long_text",
            shortQuestion: "Pregunta larga 2",
            allowOtherOption: false,
            textResults: [
              "Respuesta de pregunta larga 2",
              "Respuesta de pregunta larga 2",
              "Respuesta de pregunta larga 2",
              "Respuesta de pregunta larga 2",
              "Respuesta de pregunta larga 2",
              "Respuesta de pregunta larga 2",
            ],
            graphData: null,
          },
          {
            idPregunta: 3,
            nombre: "Selección múltiple",
            type: "multiple_choice",
            shortQuestion: "Pregunta seleccion multiple 3",
            allowOtherOption: false,
            textResults: [],
            graphData: {
              labels: ["Opcion 1", "Opcion 2", "Opcion 3"],
              datasets: [
                {
                  label: "Cantidad de respuestas",
                  data: [4, 2, 3],
                },
              ],
            },
          },
          {
            idPregunta: 4,
            nombre: "Selección múltiple",
            type: "multiple_choice",
            shortQuestion: "Pregunta seleccion multiple 4 --OTROS--",
            allowOtherOption: true,
            textResults: [
              "Seleccion multiple: Respuesta Otros",
              "Seleccion multiple: Respuesta Otros",
              "Seleccion multiple: Respuesta Otros",
              "Seleccion multiple: Respuesta Otros",
              "Seleccion multiple: Respuesta Otros",
              "Seleccion multiple: Respuesta Otros",
            ],
            graphData: {
              labels: ["Opcion 1", "Opcion 2"],
              datasets: [
                {
                  label: "Cantidad de respuestas",
                  data: [0, 0],
                },
              ],
            },
          },
          {
            idPregunta: 5,
            nombre: "Selección única",
            type: "single_choice",
            shortQuestion: "Pregunta seleccion unica 5",
            allowOtherOption: false,
            textResults: [],
            graphData: {
              labels: ["Opcion 1", "Opcion 2", "Opcion 3"],
              datasets: [
                {
                  label: "Cantidad de respuestas",
                  data: [5, 0, 1],
                },
              ],
            },
          },
          {
            idPregunta: 6,
            nombre: "Selección única",
            type: "single_choice",
            shortQuestion: "Pregunta seleccion unica 6 --OTROS--",
            allowOtherOption: true,
            textResults: [
              "Seleccion unica: Respuesta Otros",
              "Seleccion unica: Respuesta Otros",
              "Seleccion unica: Respuesta Otros",
              "Seleccion unica: Respuesta Otros",
              "Seleccion unica: Respuesta Otros",
              "Seleccion unica: Respuesta Otros",
            ],
            graphData: {
              labels: ["Opcion 1", "Opcion 2", "Opcion 3"],
              datasets: [
                {
                  label: "Cantidad de respuestas",
                  data: [0, 0, 0],
                },
              ],
            },
          },
          {
            idPregunta: 7,
            nombre: "Ordenamiento/Ranking",
            type: "ranking",
            shortQuestion: "Pregunta ordenamiento 7",
            allowOtherOption: false,
            textResults: null,
            graphData: {
              labels: ["Posición 1", "Posición 2", "Posición 3"],
              datasets: [
                {
                  label: "Opción 1",
                  data: [5, 1, 0],
                },
                {
                  label: "Opción 2",
                  data: [0, 2, 4],
                },
                {
                  label: "Opción 3",
                  data: [1, 3, 2],
                },
              ],
            },
          },
          {
            idPregunta: 8,
            nombre: "Escala numérica",
            type: "numeric_scale",
            shortQuestion: "Pregunta escala numerica 8",
            allowOtherOption: false,
            textResults: null,
            graphData: {
              labels: [3, 5, 1, 2],
              datasets: [
                {
                  label: "Frecuencia",
                  data: [1, 2, 2, 1],
                },
              ],
            },
          },
          {
            idPregunta: 9,
            nombre: "Escala/Escala Likert",
            type: "likert_scale",
            shortQuestion: "Pregunta escala likert 9",
            allowOtherOption: false,
            textResults: [],
            graphData: {
              labels: ["Opcion 1", "Opcion 2", "Opcion 3"],
              datasets: [
                {
                  label: "Cantidad de respuestas",
                  data: [1, 2, 3],
                },
              ],
            },
          },
          {
            idPregunta: 10,
            nombre: "Falso/Verdadero",
            type: "true_false",
            shortQuestion: "Pregunta falso / verdadero numerica 10",
            allowOtherOption: false,
            textResults: [],
            graphData: {
              labels: ["Verdadero", "Falso"],
              datasets: [
                {
                  label: "Cantidad de respuestas",
                  data: [3, 0],
                },
              ],
            },
          },
        ],
      },
    };
    return jsonData;
  } catch (error) {
    console.error("Error loading data:", error);
    return null;
  }
}

function displayGeneralInfo(formInfo) {
  document.getElementById("survey-title").textContent = formInfo.titulo;
  document.getElementById("survey-description").textContent =
    formInfo.descripcion;
  document.getElementById("created-by").textContent = formInfo.createdBy;
  document.getElementById("total-responses").textContent =
    formInfo.totalRespuestas;
}

function createChart(container, graphData, type = "bar") {
  const canvas = document.createElement("canvas");
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const isStacked = type === "stacked";
  const chartConfig = {
    type: isStacked ? "bar" : type,
    data: {
      labels: graphData.labels,
      datasets: graphData.datasets.map((dataset, index) => ({
        ...dataset,
        backgroundColor:
          type === "pie"
            ? generateColors(dataset.data.length)
            : generateColors(graphData.datasets.length)[index],
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 1,
        stack: isStacked ? "stack1" : undefined,
      })),
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales:
        type === "pie"
          ? {}
          : {
              x: {
                stacked: isStacked,
              },
              y: {
                stacked: isStacked,
                beginAtZero: true,
                ticks: {
                  stepSize: 1,
                },
              },
            },
      plugins: {
        legend: {
          display: isStacked || type === "pie",
          position: "bottom",
        },
        tooltip: {
          mode: "index",
        },
      },
    },
  };

  return new Chart(ctx, chartConfig);
}

function generateColors(count) {
  const colors = [
    "rgba(255, 99, 132, 0.8)",
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
  ];

  return Array(count)
    .fill()
    .map((_, i) => colors[i % colors.length]);
}

function displayQuestion(question) {
  const container = document.getElementById("questions-container");
  const questionCard = document.createElement("div");
  questionCard.className = "question-card";

  // Título de la pregunta
  const title = document.createElement("h3");
  title.className = "question-title";
  title.textContent = `${question.nombre}: ${question.shortQuestion}`;
  questionCard.appendChild(title);

  // Manejo de respuestas según el tipo de pregunta
  if (question.type === "short_text" || question.type === "long_text") {
    if (question.textResults && question.textResults.length > 0) {
      const textContainer = document.createElement("div");
      textContainer.className = "text-responses";
      const ul = document.createElement("ul");
      question.textResults.forEach((response) => {
        const li = document.createElement("li");
        li.textContent = response;
        ul.appendChild(li);
      });
      textContainer.appendChild(ul);
      questionCard.appendChild(textContainer);
    }
  } else if (question.graphData) {
    const chartContainer = document.createElement("div");
    chartContainer.className = "chart-container";
    questionCard.appendChild(chartContainer);

    // Seleccionar el tipo de gráfico según el tipo de pregunta
    let chartType = "bar";
    if (
      question.type === "true_false" ||
      question.type === "single_choice" ||
      question.type === "likert_scale"
    ) {
      chartType = "pie";
    } else if (question.type === "ranking") {
      chartType = "stacked";
    }

    createChart(chartContainer, question.graphData, chartType);

    // Si hay respuestas en "otros", mostrarlas
    if (
      question.allowOtherOption &&
      question.textResults &&
      question.textResults.length > 0
    ) {
      const othersContainer = document.createElement("div");
      othersContainer.className = "text-responses";
      const othersTitle = document.createElement("h4");
      othersTitle.textContent = "Otras respuestas:";
      othersContainer.appendChild(othersTitle);

      const ul = document.createElement("ul");
      question.textResults.forEach((response) => {
        const li = document.createElement("li");
        li.textContent = response;
        ul.appendChild(li);
      });
      othersContainer.appendChild(ul);
      questionCard.appendChild(othersContainer);
    }
  }

  container.appendChild(questionCard);
}

async function init() {
  const data = await loadData();
  if (data && data.success) {
    displayGeneralInfo(data.data.formGeneralInfo);
    data.data.formStats.forEach((question) => displayQuestion(question));
  }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
