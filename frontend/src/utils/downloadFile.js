export const download = (e, type) => {
  console.log(e.target.href);
  fetch(e.target.href, {
    method: 'GET',
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', type);
        document.body.appendChild(link);
        link.click();
        // const link = () => <a href={url} download='image.gif' />
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
