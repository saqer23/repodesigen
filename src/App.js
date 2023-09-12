/* eslint-disable */
import React from 'react';
import './App.css';
//Report Viewer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';

var viewerStyle = {'height': '700px', 'width': '100%'};
  
function App() {
  return (
    <div style={viewerStyle}>
     <BoldReportViewerComponent
     id="reportviewer-container"
     reportServiceUrl = {'https://demos.boldreports.com/services/api/ReportViewer'}
     reportPath = {'~/Resources/docs/sales-order-detail.rdl'} >
     </BoldReportViewerComponent>
    </div>
  );
}
  
export default App;