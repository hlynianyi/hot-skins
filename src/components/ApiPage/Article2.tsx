const Article2 = () => {
  const codeStringPhp = `
    <?php
    header('Content-type: text/html; charset=UTF-8');
    if (count($_REQUEST)>0){
        require_once 'apiEngine.php';
        foreach ($_REQUEST as $apiFunctionName => $apiFunctionParams) {
            $APIEngine=new APIEngine($apiFunctionName, $apiFunctionParams);
            echo $APIEngine->callApiFunction();
            break;
        }
    }else{
        $jsonError->error='No function called';
        echo json_encode($jsonError);
    }
    ?>
  `.trim();

  const codeStringJs = `
    const articleCollection = api.all('articles'); 

    // http://api.example.com/articles/1
    api.one('articles', 1).get().then((response) => {
        const articleEntity = response.body();

        // if the server response was { id: 1, title: 'test', body: 'hello' }
        const article = articleEntity.data();
        article.title; // returns 'test'
        article.body; // returns 'hello'
        // You can also edit it
        article.title = 'test2';
        // Finally you can easily update it or delete it
        articleEntity.save(); // will perform a PUT request
        articleEntity.delete(); // will perform a DELETE request
    }, (response) => {
        // The reponse code is not >= 200 and < 400
        throw new Error('Invalid response');
    });
  `.trim();

  return (
    <article className="main-content">
      <div className="api-page_title">Creating subscription</div>
      <div className="api-page_text">
        CarPlay has been installed in most new cars for a long time. Many
        drivers are accustomed to this system, because it provides access to
        Apple Music and a convenient navigator on the car screen.
      </div>
      <div className="api-instructions">
        <h2>Example on PHP</h2>
        <pre>
          <code>{codeStringPhp}</code>
        </pre>
      </div>
      <div className="api-instructions">
        <h2>Example on JS</h2>
        <div>
          <pre>
            <code>{codeStringJs}</code>
          </pre>
        </div>
      </div>
    </article>
  );
};

export default Article2;
