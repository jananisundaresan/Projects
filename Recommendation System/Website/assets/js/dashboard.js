var viz;
var vizAlert;
var vizHistorical;


function monthSelected() {
    var month = document.getElementById("monthSelect").value;
    if(viz){
        //There is a visualization created. Update filters
        var sheet = viz.getWorkbook().getActiveSheet();
        if (month) {
            sheet.applyFilterAsync("MONTH", month, tableau.FilterUpdateType.REPLACE);
        } else {
            sheet.applyFilterAsync("MONTH", "", tableau.FilterUpdateType.ALL);
        }
    } else {
        //There is no visualization yer. Create one.
        initViz(month);
    }

}

function initViz(month) {
    // var containerDiv = document.getElementById("vizContainer"),
    //     url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms",
    //     options = {
    //         hideTabs: true,
    //         onFirstInteractive: function () {
    //             console.log("Run this code when the viz has finished loading.");
    //         }
    //     };

    // var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Disaster-2020/Sheet1?:embed=y&:display_count=yes",
        options = {
            //"Disaster Type": "Fire",
            "MONTH": month,
            //"Sub-Region": "Polynesia",
            hideTabs: true
        };

    viz = new tableau.Viz(containerDiv, url, options);
    viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
}

function initVizAlert(country) {
    var containerDiv = document.getElementById("vizAlertContainer"),
        url = "https://public.tableau.com/views/AlertType/Dashboard1?:embed=y&:display_count=yes",
        options = {
            //"Disaster Type": "Fire",
            //"MES(Month)": "March",
            //"Sub-Region": "Polynesia",
            'Country': country,
            hideTabs: true
        };

    vizAlert = new tableau.Viz(containerDiv, url, options);
}

function onMarksSelection(marksEvent) {
    return marksEvent.getMarksAsync().then(reportSelectedMarks);
}

function reportSelectedMarks(marks) {
    var html = "";

    for (var markIndex = 0; markIndex < marks.length; markIndex++) {
        var pairs = marks[markIndex].getPairs();
        //html += "<b>Mark " + markIndex + ":</b><ul>";

        for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
            var pair = pairs[pairIndex];
        //    html += "<li><b>Field Name:</b> " + pair.fieldName;
        //    html += "<br/><b>Value:</b> " + pair.formattedValue + "</li>";
            if(pair.fieldName === 'Country'){
                changeCountry(pair.formattedValue);
                break;
            }
        }

        //html += "</ul>";
    }

    //var infoDiv = document.getElementById('markDetails');
    //infoDiv.innerHTML = html;
}

function changeCountry(country){
    
    //viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
    //var month = document.getElementById("monthSelect").value;

    if(vizAlert){
        //There is a visualization created. Update filters
        var sheet = vizAlert.getWorkbook().getActiveSheet().getWorksheets().get("Sheet 3");
        
        if (country) {
            sheet.applyFilterAsync("Country", country, tableau.FilterUpdateType.REPLACE);
        } else {
            sheet.applyFilterAsync("Country", "", tableau.FilterUpdateType.ALL);
        }
    } else {
        //There is no visualization yer. Create one.
        initVizAlert(country);
    }
}

function yearFilter(year) {
    var sheet = viz.getWorkbook().getActiveSheet();
    sheet.applyFilterAsync("Disaster Type", "Fire", tableau.FilterUpdateType.REPLACE);
    /*var sheet = viz.getWorkbook().getActiveSheet();
    if (year === "") {
        sheet.clearFilterAsync("Academic Year");
    } else {
        sheet.applyFilterAsync("Academic Year", year, tableau.FilterUpdateType.REPLACE);
    }*/
}

function getFilters() {
    var sheet = viz.getWorkbook().getActiveSheet();
    sheet.getFiltersAsync()
        .then(function (filters) {

            console.log("promise returned");

            // Iterate (using ES6 style) through the filters retrieving properties
            for (filter of filters) {
                console.log(filter.getFieldName());
                console.log(filter.getFilterType());
            }
        });
}

function showHistory(){
    var containerDiv = document.getElementById("vizContainerHistorical"),
        url = "https://public.tableau.com/views/Disaster2009-2019/Sheet1?:embed=y&:display_count=yes",
        options = {
            //"Disaster Type": "Fire",
            //"MONTH": month,
            //"Sub-Region": "Polynesia",
            hideTabs: true
        };

    vizHistorical = new tableau.Viz(containerDiv, url, options);
}