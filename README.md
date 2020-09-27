# react-mobx-jest template project

#### webpack-babel config 설명참고
- https://parkjihwan.tistory.com/18

#### Html-webpack-plugin
- 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인  
- 번들링한 자바스크립트 파일을 자동으로 연결해줍니다.  

#### Clean-webpack-plugin
- build할때 기존에 build된 파일들을 제거해줍니다.  

#### webpack-merge
- development와 production config 파일을 따로 만들때 공통된 속성을 묶을 때 필요합니다.  

#### webpack-dev-server
- 웹팩으로 빌드한 후 빌드한 파일을 서버로 띄웁니다.  
- 실제로 파일로 빌드되진 않고 메모리에 저장됩니다. 따라서, 폴더에서는 보이지 않습니다.
