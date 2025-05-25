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

function exportToImage(canvas, questionTitle) {
  // Crear un canvas temporal con fondo blanco y espacio para el título
  const tempCanvas = document.createElement('canvas');
  const originalWidth = canvas.width;
  const originalHeight = canvas.height;
  const titleHeight = 40; // Espacio para el título
  
  tempCanvas.width = originalWidth;
  tempCanvas.height = originalHeight + titleHeight;
  
  const ctx = tempCanvas.getContext('2d');
  
  // Establecer fondo blanco
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  
  // Dibujar el título
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(questionTitle, tempCanvas.width / 2, 25);
  
  // Dibujar el gráfico original
  ctx.drawImage(canvas, 0, titleHeight, originalWidth, originalHeight);
  
  // Crear el enlace de descarga
  const link = document.createElement('a');
  link.download = `${questionTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
  link.href = tempCanvas.toDataURL('image/png');
  link.click();
}

function exportToExcel(data, questionTitle) {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Datos");
  XLSX.writeFile(wb, `${questionTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.xlsx`);
}

function exportToPDF(canvas, questionTitle, questionData) {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // Añadir título
  pdf.setFontSize(16);
  pdf.text(questionTitle, 20, 20);

  // Añadir gráfico
  const imgData = canvas.toDataURL("image/png");
  pdf.addImage(imgData, "PNG", 20, 40, 170, 100);

  // Añadir datos tabulares si existen
  if (questionData && questionData.length > 0) {
    pdf.addPage();
    pdf.setFontSize(12);
    pdf.text("Datos detallados", 20, 20);

    let yPos = 40;
    questionData.forEach((row, index) => {
      pdf.text(`${Object.values(row).join(", ")}`, 20, yPos);
      yPos += 10;
    });
  }

  pdf.save(`${questionTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.pdf`);
}

function exportToWord(questionTitle, canvas, questionData) {
    // Asegurarnos de que docx está disponible
    if (!window.docx) {
        console.error('La librería docx no está cargada');
        alert('Error al exportar a Word. Por favor, intente de nuevo.');
        return;
    }

    const { Document, Paragraph, TextRun, ImageRun, Packer } = window.docx;

    // Convertir la imagen a base64
    const imageData = canvas.toDataURL("image/png").split(',')[1];

    // Crear el documento
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: questionTitle,
                            bold: true,
                            size: 32
                        })
                    ]
                }),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: imageData,
                            transformation: {
                                width: 600,
                                height: 400
                            }
                        })
                    ]
                })
            ]
        }]
    });

    // Exportar el documento
    Packer.toBlob(doc).then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${questionTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.docx`;
        link.click();
        window.URL.revokeObjectURL(url);
    }).catch(error => {
        console.error('Error al generar el documento Word:', error);
        alert('Error al exportar a Word. Por favor, intente de nuevo.');
    });
}

function createExportButtons(container, chart, questionTitle, questionData) {
  const buttonsContainer = document.createElement("div");
  buttonsContainer.className = "export-buttons";

  // Botón de exportar imagen
  const imageButton = document.createElement("button");
  imageButton.className = "export-button image";
  imageButton.innerHTML = '<i class="fas fa-image"></i> Imagen';
  imageButton.onclick = () => exportToImage(chart.canvas, questionTitle);

  // Botón de exportar Excel
  const excelButton = document.createElement("button");
  excelButton.className = "export-button excel";
  excelButton.innerHTML = '<i class="fas fa-file-excel"></i> Excel';
  excelButton.onclick = () => exportToExcel(questionData, questionTitle);

  // Botón de exportar PDF
  const pdfButton = document.createElement("button");
  pdfButton.className = "export-button pdf";
  pdfButton.innerHTML = '<i class="fas fa-file-pdf"></i> PDF';
  pdfButton.onclick = () => exportToPDF(chart.canvas, questionTitle, questionData);

  // Botón de exportar Word
  const wordButton = document.createElement("button");
  wordButton.className = "export-button word";
  wordButton.innerHTML = '<i class="fas fa-file-word"></i> Word';
  wordButton.onclick = () => exportToWord(questionTitle, chart.canvas, questionData);

  buttonsContainer.appendChild(imageButton);
  buttonsContainer.appendChild(excelButton);
  buttonsContainer.appendChild(pdfButton);
  buttonsContainer.appendChild(wordButton);

  container.appendChild(buttonsContainer);
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

    const chart = createChart(chartContainer, question.graphData, chartType);

    // Preparar datos para exportación
    const exportData = question.graphData.labels.map((label, index) => {
      const dataPoint = {
        Opción: label,
      };
      question.graphData.datasets.forEach((dataset) => {
        dataPoint[dataset.label] = dataset.data[index];
      });
      return dataPoint;
    });

    // Crear botones de exportación
    createExportButtons(chartContainer, chart, question.shortQuestion, exportData);

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
