
require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';  

/* load in JSON data from file 
webpack enables use of loaders to preprocess files.
json-loader): Loads file as JSON
 */ 
 
let imageDatas = require('json-loader!../data/imageData.json');// 加上json-loader!/json!
console.log(imageDatas);

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
     for (var i = 0;i < imageDatasArr.length;  i++) {
      var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
        console.log(imageDatasArr);
    }

    return imageDatasArr;
})(imageDatas);


class ImgFigure extends React.Component {
    render() {
        return ( 

       <img src={this.props.data.imageURL} />  


        );
    }
}



class AppComponent extends React.Component {
        render() { 
        var imgFigures = [];
 
    imageDatas.forEach(function (value, index) {
 
        imgFigures.push(<ImgFigure key={index} data={value} ref={'imgFigure' + index}/>);

      }.bind(this));
                console.log(imgFigures);
                return (
                  <div className = "index" >{imgFigures}</div>
                );
            }
        }

        AppComponent.defaultProps = {};

        export default AppComponent;
