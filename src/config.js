const DEV_VARIABLES = {
    movieApi:{
        key:"f3e9f7d1677c7aa63c9ab526381eeceb",
        url:"https://api.themoviedb.org",
        version:"3",
        language:"pl-PL",
        pre_url:`https://api.themoviedb.org/3/`,
        after_url:`language=pl-PL&api_key=f3e9f7d1677c7aa63c9ab526381eeceb`
    }
  };
  
  const PRD_VARIABLES = {
    movieApi:{
        key:"f3e9f7d1677c7aa63c9ab526381eeceb",
        url:"https://api.themoviedb.pl",
        version:"3",
        language:"pl-PL",
        pre_url:`https://api.themoviedb.pl/3/`,
        after_url:`language=pl-PL&api_key=f3e9f7d1677c7aa63c9ab526381eeceb`
    }
  };


const Config = process.env.REACT_APP_NODE_ENV === 'production'? PRD_VARIABLES: DEV_VARIABLES;

export default {
    Author:'Michał Wójcik' ,
    Config:Config
  };