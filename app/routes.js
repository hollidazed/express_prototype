module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {
      	'message' : 'Hello world',
      	'title' : 'Nice to be here'
      });
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });   
    
		app.get('/state-pension/ni-record', function (req, res) {
			res.render('state-pension/ni-record', {
			'pageTitle' : 'testing',
			'assetPath' : assetPath		
			});
		});
		

  }
};
