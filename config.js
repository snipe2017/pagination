(function(global) {

    var ngVer = '@2.4.3'; 
  
    
    var  map = {
      'app':                        'src',
      'rxjs':                       'https://npmcdn.com/rxjs@5.3.0',
      'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', 
      'ngx-pagination':             'https://npmcdn.com/ngx-pagination'
      
    };
  
    
    var packages = {
      'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
      'rxjs':                       { defaultExtension: 'js' },
      'angular2-in-memory-web-api': { defaultExtension: 'js' },
      'ngx-pagination':             { defaultExtension: 'js' }
    };
  
    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
    ];
  
    
    packageNames.forEach(function(pkgName) {
      map[pkgName] = 'https://npmcdn.com/' + pkgName + ngVer;
    });
  
    
    packageNames.forEach(function(pkgName) {
      packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });
  
    var config = {
      transpiler: 'typescript',
      typescriptOptions: {
        emitDecoratorMetadata: true
      },
      map: map,
      packages: packages
    }
  
    
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
  
    System.config(config);
  
  })(this);