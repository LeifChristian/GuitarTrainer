import { StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Audio } from "expo-av";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useEffect, useState} from 'react'
import { RootTabScreenProps } from '../types';
import Fretboard from '../assets/images/fretmax.png'

// const Fretboard = { uri: "../assets/images/fretmax.png" };

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [audioFile, setAudioFile] = useState(false);
  

  const [one, setone] = useState(Boolean)
  const [two, settwo] = useState(false)
  const [three, setthree] = useState(false)
  const [four, setfour] = useState(false)
  const [five, setfive] = useState(false)
  const [six, setsix] = useState(false)
  const [seven, setseven] = useState(false)
  const [eight, seteight] = useState(false)
  const [nine, setnine] = useState(false)
  const [ten, setten] = useState(false)
  const [eleven, seteleven] = useState(false)
  const [twelve, settwelve] = useState(false)
  const [thirteen, setthirteen] = useState(false)
  const [fourteen, setfourteen] = useState(false)
  const [fifteen, setfifteen] = useState(false)
  const [sixteen, setsixteen] = useState(false)
  const [seventeen, setseventeen] = useState(false)
  const [eighteen, seteighteen] = useState(false)
  const [nineteen, setnineteen] = useState(false)
  const [twenty, settwenty] = useState(false)
  const [twentyOne, settwentyone] = useState(false)
  const [twentyTwo, settwentytwo] = useState(false)
  const [twentyThree, settwentythree] = useState(false)
  const [twentyFour, settwentyfour] = useState(false)
  const [twentyFive, set25] = useState(false)
  const [a26, set26] = useState(false)
  const [a27, set27] = useState(false)
  const [a28, set28] = useState(false)
  const [a29, set29] = useState(false)
  const [a30, set30] = useState(false)
  const [a31, set31] = useState(false)
  const [a32, set32] = useState(false)
  const [a33, set33] = useState(false)
  const [a34, set34] = useState(false)
  const [a35, set35] = useState(false)
  const [a36, set36] = useState(false)


  // const [scaleDegree1, setScaleDegree1] = useState('');
  // const [scaleDegree2, setScaleDegree2] = useState('');
  // const [scaleDegree3, setScaleDegree3] = useState('');
  // const [scaleDegree4, setScaleDegree4] = useState('');
  // const [scaleDegree5, setScaleDegree5] = useState('');
  // const [scaleDegree6, setScaleDegree6] = useState('');
  // const [scaleDegree7, setScaleDegree7] = useState('');

  const[scaleSchema, setScaleSchema]= useState("Amin");

  useEffect(() => { 
console.log('useEffect returning...')
  
  }, [one])

  switch(scaleSchema){

    case 'Ab': console.log('Ab');
    
    // setone();
    // settwo();
    // setthree();
    // setfour();
    // setfive();
    // setsix();
    // setseven();
    // seteight();
    // setnine();
    // setten();
    // seteleven();
    // settwelve();
    // setthirteen();
    // setfourteen();
    // setfifteen();
    // setsixteen();
    // setseventeen();
    // seteighteen();
    // setnineteen();
    // settwenty();
    // settwentyone();
    // settwentytwo();
    // settwentythree();
    // settwentyfour();
    // set25();
    // set26();
    // set27();
    // set28();
    // set29();
    // set30();
    // set31();
    // set32();
    // set33();
    // set34();
    // set35();
    // set36();
    
    break;

    case 'A': 

    console.log('okay')
if(!one)
{setone(true);
    settwo(false);
    setthree(true);
    setfour(false);
    setfive(true);
    setsix(true);
    setseven(false);
    seteight(true);
    setnine(false);
    setten(true);
    seteleven(false);
    settwelve(true);
    setthirteen(true);
    setfourteen(false);
    setfifteen(true);
    setsixteen(false);
    setseventeen(true);
    seteighteen(true);
    setnineteen(false);
    settwenty(true);
    settwentyone(true);
    settwentytwo(false);
    settwentythree(true);
    settwentyfour(false);
    set25(true);
    set26(true);
    set27(false);
    set28(true);
    set29(true);
    set30(false);

}
    
    break;

    case 'Amin': console.log('b');

    console.log('okay')
    if(!one)
    {setone(true);
        settwo(false);
        setthree(true);
        setfour(true);
        setfive(false);
        setsix(true);
        setseven(false);
        seteight(true);
        setnine(true);
        setten(false);
        seteleven(true);
        settwelve(false);
        setthirteen(true);
        setfourteen(false);
        setfifteen(true);
        setsixteen(true);
        setseventeen(false);
        seteighteen(true);
        setnineteen(false);
        settwenty(false);
        settwentyone(true);
        settwentytwo(true);
        settwentythree(false);
        settwentyfour(true);
        set25(false);
        set26(true);
        set27(false);
        set28(true);
        set29(true);
        set30(false);
    }


    
    
    break;

    case 'C': console.log('c');
    
    
    break;

    case 'Db': console.log('Db');
    
    
    break;

    case 'D': console.log('D');
    
    
    break;

    case 'Eb': console.log('Eb');
    
    
    break;

    case 'E': console.log('E');
    
    
    break;

    case 'F': console.log('F');
    
    
    break;

    case 'F#': console.log('F#');
    
    
    break;

    case 'G': console.log('G');
    
    
    break;

    default: console.log('none')

  }

const buttonPress = async (param: string) => {
console.log(param)

    //   const {sound}  = await Audio.Sound.createAsync( require('../sound.mp3'));
    // setAudioFile(sound);

    const sound = new Audio.Sound();
     await sound.loadAsync(require(`./key03.mp3`));
     await sound.playAsync();

}

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

<Text style={{zIndex: 3000, position: "relative", marginBottom:102, marginRight: 340, fontWeight: "900", fontSize: 22}}>5</Text>
<ImageBackground
  source={Fretboard}
  style={{height: 500, width: 220, marginTop: -120,}}
> 
<View  style={{display: "flex", flexDirection: 'row', marginTop: 20, marginLeft: 0, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{!one ? buttonPress('1'): null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: one ? 1 : 0}}>1</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('6')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: six ? 1 : 0}}>6</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('11')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: eleven ? 1 : 0}}>11</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('16')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: sixteen ? 1 : 0}}>16</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('21')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyOne ? 1 : 0}}>21</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('26')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a26 ? 1 : 0}}>26</Text></TouchableOpacity>
</View>

<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:58, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('2')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: two ? 1 : 0}}>2</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('7')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2,opacity: seven ? 1 : 0}}>7</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('12')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twelve ? 1 : 0}}>12</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('17')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: seventeen ? 1 : 0}}>17</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('22')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyTwo ? 1 : 0}}>22</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('27')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a27 ? 1 : 0}}>27</Text></TouchableOpacity>
</View>
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:58, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('3')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: three ? 1 : 0}}>3</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('8')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: eight ? 1 : 0}}>8</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('13')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: thirteen ? 1 : 0}}>13</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('18')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: eighteen ? 1 : 0}}>18</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('23')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyThree ? 1 : 0}}>23</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('28')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a28 ? 1 : 0}}>28</Text></TouchableOpacity>
</View>
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:52, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('4')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: four ? 1 : 0}}>4</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('9')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: nine ? 1 : 0}}>9</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('14')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: fourteen ? 1 : 0}}>14</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('19')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: nineteen ? 1 : 0}}>19</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('24')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyFour ? 1 : 0}}>24</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12, display: a29 ? "flex" : 'none'}}
        onPress={()=>{buttonPress('29')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a29 ? 1 : 0}}>29</Text></TouchableOpacity>
</View>
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:52, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('5')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: five ? 1 : 0}}>5</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('10')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: ten ? 1 : 0}}>10</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('15')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: fifteen ? 1 : 0 }}>15</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('20')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twenty ? 1 : 0}}>20</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('25')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyFive ? 1 : 0}}>25</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('30')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a30 ? 1 : 0}}>30</Text></TouchableOpacity>
</View>
{/* <View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:52, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('6')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2}}>1</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('12')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2}}>1</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('18')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2}}>1</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('24')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2}}>1</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('30')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2}}>1</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10, marginRight: 12}}
        onPress={()=>{buttonPress('36')}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2}}>1</Text></TouchableOpacity>
</View> */}
</ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

//   button: {
// color: 'red'
//   },

  button:{marginLeft: 10, marginRight: 12},
  buttonText: {fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
