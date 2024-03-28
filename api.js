const OPTIONS = {
    method: 'GET',
    headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '444dcc18cfmsh4021bb6a579d80ap113a8ejsn1160f20d7bc6',
		'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
	},
  };
  
  const fetchIpInfo = async (ip) => {
    try {
      const response = await fetch(`https://community-neutrino-ip-info.p.rapidapi.com/ip-info/${ip}`, OPTIONS);
      return response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  const $form = document.querySelector('#form');
  const $input = document.querySelector('#input');
  const $submit = document.querySelector("#submit");
  const $results = document.querySelector("#results");
  
  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { value } = $input;
    if (!value) return;
  
    $submit.setAttribute('disabled', '');
    $submit.setAttribute('aria-busy', '');
  
    const ipInfo = await fetchIpInfo(value); // Pasar el valor del campo de entrada a la función
  
    if (ipInfo) {
      $results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }
  
    $submit.removeAttribute('disabled'); // Corregir el nombre del método removeAttribute
    $submit.removeAttribute('aria-busy');
  });
  