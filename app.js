

var jobs = [];		
		
jobs.push( ({

	name:"Example Job",
	time:"9:00"	
}) );

//add jobs to #todays-jobs
function buildJob( job ){

	//alert( "job details: "+job.name );
	var jobMarkup = "";
	jobMarkup += "<div class='row jl-today-row jl-new-row'>";
	jobMarkup += "<div class='col-sm-2 col-xs-2 jl-time'>";
	jobMarkup += job.time;
	jobMarkup += "</div>";
	jobMarkup += "<h2 class='col-sm-10 col-xs-10'>";
	jobMarkup += job.name;
	jobMarkup += "</h2>";
	jobMarkup += "</div>";

	$("#todays-jobs").append(jobMarkup);
}

function buildTodaysJobs( myArray ){


	$( myArray ).each( function(){

		buildJob( this );

	} );
}



//PUT STUFF HERE YOU WANT FIRED AFTER THE PAGE LOADS
$( document ).ready(function() {

	buildTodaysJobs( jobs );

	$('#jobSubmit').click( 

		function(){

			buildJob( ({ name:$('#jobName').val(), time:$('#jobTime').val() }) );
		}
	);
});

