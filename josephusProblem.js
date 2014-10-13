var people = [];
$(function(){

	for(var i=0; i<100; i++)
	{
		people[i] = 1;
	}
	
	var gunIsWith=0;
	
	while(countOf(people) > 1)
	{
		var nextPersonToKill;
		
		if(gunIsWith == 99)
		nextPersonToKill = 0;
		else
		nextPersonToKill = gunIsWith+1;
		
		while(people[nextPersonToKill]==0)
		{
			if(nextPersonToKill==99)
			nextPersonToKill = 0;
			else
			nextPersonToKill++;
		}
		
		$("#op").append(gunIsWith + " killed " + nextPersonToKill+"<br>");
		people[nextPersonToKill] = 0;
		
		if(nextPersonToKill == 99)
		gunIsWith = 0;
		else
		gunIsWith = nextPersonToKill+1;
		
		while(people[gunIsWith]==0)
		{
			if(gunIsWith==99)
			gunIsWith = 0;
			else
			gunIsWith++;
		}
	}
	
	alert(gunIsWith+1);
});
	
function countOf(arr)
{
	var count = 0;
	for(var k=0; k<arr.length;k++)
	{
		if(arr[k]==1)
		count++;
	}
	return count;
}
