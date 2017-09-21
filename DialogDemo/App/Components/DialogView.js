/**
 * 数据请求前显示"加载中..."
 */
import React, { PureComponent, PropTypes } from 'react';

import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';


export default class DialogView extends React.Component {

     // 构造函数  
  constructor(props) {  
    super(props);  
    this.state = {  
      show:false,  
    };  
  }  

  static propTypes = {
    isShow: React.PropTypes.bool,
    title: PropTypes.string,
    // imageName: PropTypes.string
}

static defaultProps = {
    onPress:() => {},
    title: '',
    imageName: ''
}
  
  // 加载完成  
  componentDidMount(){  
    //  
  }  
  
  // view卸载  
  componentWillUnmount(){  
    //  
  }  

    render() {
        if (!this.props.isShow) return null;
        const { onPress, imageName, title } = this.props
        
        return (
            <View style={styles.container}>
                <Modal  
                animationType='slide'  
                transparent={false}  
                visible={this.props.isShow}  
                onShow={() => {}}  
                onRequestClose={() => {}} >  
                <View style={styles.modalStyle}>  
                    <View style={styles.subView}>  
                        <View style={{alignItems: 'center', justifyContent:'center'}}>
                            <Image style={styles.imageStyle} source={imageName}>  
                            </Image>  
                            <Text style={styles.contentText}>  
                            {title}
                            </Text>  
                        </View>
                        <View style={styles.horizontalLine} />  
                        <View style={styles.buttonView}>  
                        <View style={styles.verticalLine} />  
                        <TouchableHighlight underlayColor='transparent'  
                            style={styles.buttonStyle}  
                            onPress={this.sureAction.bind(this)}>  
                            <Text style={styles.buttonText}>  
                                确定  
                            </Text>  
                        </TouchableHighlight>  
                        </View>  
                    </View>  
                </View>  
            </Modal>  
            </View>
        )
    }

    sureAction() {
        // alert('确定');
        if(this.props.onPress) {
            this.props.onPress();
        }
    }
}

const styles = StyleSheet.create({
    container:{  
        flex:1,  
        backgroundColor: '#ECECF0',  
      },  
      // modal的样式  
      modalStyle: {  
        backgroundColor:'#ccc',  
        alignItems: 'center',  
        justifyContent:'center',  
        flex:1,  
      },  
      // modal上子View的样式  
      subView:{  
        marginLeft:60,  
        marginRight:60,  
        backgroundColor:'#fff',  
        alignSelf: 'stretch',  
        // alignItems:'center',
        justifyContent:'center',  
        borderRadius: 10,  
        borderWidth: 0.5,  
        borderColor:'#ccc',  
      },  
      // 标题  
      titleText:{  
        marginTop:10,  
        marginBottom:5,  
        fontSize:16,  
        fontWeight:'bold',  
        textAlign:'center',  
      },  
      // 内容  
      contentText:{  
        margin:10,  
        fontSize:14,  
        textAlign:'center',  
      },  
      // 水平的分割线  
      horizontalLine:{  
        marginTop:5,  
        height:0.5,  
        backgroundColor:'#ccc',  
      },  
      // 按钮  
      buttonView:{  
        flexDirection: 'row',  
        alignItems: 'center',  
      },  
      buttonStyle:{  
        flex:1,  
        height:44,  
        alignItems: 'center',  
        justifyContent:'center',  
      },  
      // 竖直的分割线  
      verticalLine:{  
        width:0.5,  
        height:44,  
        backgroundColor:'#ccc',  
      },  
      buttonText:{  
        fontSize:16,  
        color:'#3393F2',  
        textAlign:'center',  
      },  
      imageStyle: {
          marginTop: 20,
          width: 60,
          height: 60,
          // backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
      }
})