const canvas = document.getElementById("editor")
const audio = new Audio()

function getAudioFromId(assetId,callback)
{
	var req = new XMLHttpRequest()
	req.onreadystatechange = function ()
	{
		if (req.readyState == 4 && req.status == 200)
		{
			var url = req.response["location"]
			callback(url)
		}
	}
	req.open("GET", `https://assetdelivery.roblox.com/v1/userAssetId/${assetId}`)
	req.send(null)
}
getAudioFromId("6810792837",console.log)