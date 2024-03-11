import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Barchart = () => {

    const chartRef = useRef(null);

    useEffect(() => {
        // Obtén la referencia al elemento del DOM donde quieres renderizar el gráfico
        const ctx = document.getElementById('myChart').getContext('2d');

        // Destruye el gráfico existente, si hay alguno
        if (chartRef.current !== null) {
            chartRef.current.destroy();
        }

        // Inicializa el gráfico usando Chart.js
        chartRef.current = new Chart(ctx, {
            type: 'scatter', // Tipo de gráfico
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    type: 'bar',
                    label: 'Payments',
                    data: [10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)'
                }, {
                    type: 'line',
                    label: 'Earns',
                    data: [40, 10, 20, 40, 10, 20, 40, 10, 20, 40, 10, 20],
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []);

    return (
        <div>
            <canvas id="myChart" height='120'></canvas>
        </div>
    )
}

export default Barchart
