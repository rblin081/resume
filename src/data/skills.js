
export default
  [
    {
      title: 'Front End',
      data : {
        labels: ['Javascript', 'ES5', 'ES6', 'jQuery', 'React', 'Redux'],
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            backgroundColor: [
        		'#0F1A20',
        		'#F42C04',
        		'#E2856E',
            '#ADA296',
            '#88A2AA',
            '#FCFC62'
          ],
            data: [ 75, 75, 55, 80, 65, 65 ]
          }
        ]
      }
    },
    {
      title : 'Back End',
      data : {
        labels: ['Java','JSP','Node'],
        datasets: [
          {
            label: 'Back End',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
            data: [ 75, 95, 65 ]
          }
        ]
      }
    },
    {
      title : 'Server',
      data : {
        labels: ['Node','Tomcat'],
        datasets: [
          {
            label: 'Server',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            backgroundColor: [
            '#615055',
            '#CDD5D1'
            ],
            data: [ 75, 65 ]
          }
        ]
      }
    },
    {
      title : 'IDE',
      data : {
        labels: ['IntelliJ','Eclipse','Terminal','Atom','Visual Code Inspector'],
        datasets: [
          {
            label: 'IDE',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            backgroundColor: [
            '#65DEF1',
            '#A8DCD1',
            '#DCE2C8',
            '#F96900',
            '#F17F29'
            ],
            data: [ 55, 85, 65, 85, 65]
          }
        ]
      }
    }
  ]
