import { StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { Audio } from "expo-av";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {useEffect, useState} from 'react'
import { RootTabScreenProps } from '../types';
import Fretboard from '../assets/images/fretmax.png';

// const Fretboard = { uri: "../assets/images/fretmax.png" };

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  let pitchesPressed = [];
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
  const [root, setRoot] = useState(true)

  const [rootPitch, setRootPitch] = useState(5)



const [display1, setDisplay1] = useState(1)
const [display2, setDisplay2] = useState(2)
const [display3, setDisplay3] = useState(3)
const [display4, setDisplay4] = useState(4)
const [display5, setDisplay5] = useState(5)
const [display6, setDisplay6] = useState(6)
const [display7, setDisplay7] = useState(7)
const [display8, setDisplay8] = useState(8)
const [display9, setDisplay9] = useState(9)
const [display10, setDisplay10] = useState(10)
const [display11, setDisplay11] = useState(11)
const [display12, setDisplay12] = useState(12)
const [display13, setDisplay13] = useState(13)
const [display14, setDisplay14] = useState(14)
const [display15, setDisplay15] = useState(15)
const [display16, setDisplay16] = useState(16)
const [display17, setDisplay17] = useState(17)
const [display18, setDisplay18] = useState(18)
const [display19, setDisplay19] = useState(19)
const [display20, setDisplay20] = useState(20)
const [display21, setDisplay21] = useState(21)
const [display22, setDisplay22] = useState(22)
const [display23, setDisplay23] = useState(23)
const [display24, setDisplay24] = useState(24)
const [display25, setDisplay25] = useState(25)
const [display26, setDisplay26] = useState(26)
const [display27, setDisplay27] = useState(27)
const [display28, setDisplay28] = useState(28)
const [display29, setDisplay29] = useState(29)
const [display30, setDisplay30] = useState(30)

// set root, 1-5 only because first string

const [root1, setRoot1] = useState(false);
const [root2, setRoot2] = useState(false);
const [root3, setRoot3] = useState(false);
const [root4, setRoot4] = useState(false);
const [root5, setRoot5] = useState(false);

  const[scaleSchema, setScaleSchema]= useState("A");

  useEffect(() => { 
console.log('useEffect returning...')
  
  }, [one])

  switch(scaleSchema){

    case 'Ab': console.log('Ab');
    
    break;

    case 'A': 

    console.log('A major')
if(!one)
{
    setRoot1(true)  
    setone(true);
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
    settwentyone(false);
    settwentytwo(false);
    settwentythree(true);
    settwentyfour(false);
    set25(true);
    set26(true);
    set27(false);
    set28(true);
    set29(false);
    set30(true);

    setDisplay1(1)
    setDisplay2(0)
    setDisplay3(2)
    setDisplay4(0)
    setDisplay5(3)
    setDisplay6(4)
    setDisplay7(0)
    setDisplay8(5)
    setDisplay9(7)
    setDisplay10(6)
    setDisplay11(6)
    setDisplay12(7)
    setDisplay13(1)
    setDisplay14(0)
    setDisplay15(2)
    setDisplay16(0)
    setDisplay17(3)
    setDisplay18(4)
    setDisplay19(0)
    setDisplay20(5)
    setDisplay21(0)
    setDisplay22(0)
    setDisplay23(6)
    setDisplay24(3)
    setDisplay25(7)
    setDisplay26(1)
    setDisplay27(2)
    setDisplay28(2)
    setDisplay29(7)
    setDisplay30(3)

}
    break;

    case 'Amin': console.log('b');

    console.log('A minor')
    if(!one)
    {
        setRoot1(true)
        setone(true);
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


        setDisplay1(1)
        setDisplay2(0) //
        setDisplay3(2)
        setDisplay4(3)
        setDisplay5(0) //
        setDisplay6(4)
        setDisplay7(0) //
        setDisplay8(5)
        setDisplay9(6)
        setDisplay10(0) //
        setDisplay11(7)
        setDisplay12(0)
        setDisplay13(1)
        setDisplay14(0)
        setDisplay15(2)
        setDisplay16(3)
        setDisplay17(0)
        setDisplay18(4)
        setDisplay19(0)
        setDisplay20(5)
        setDisplay21(5)
        setDisplay22(6)
        setDisplay23(0)
        setDisplay24(7)
        setDisplay25(0)
        setDisplay26(1)
        setDisplay27(0)
        setDisplay28(2)
        setDisplay29(3)
        setDisplay30(0)

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

const checkScaleSchema = () => {

  setone(prevState=>!prevState);
if(scaleSchema=="A"){setScaleSchema('Amin')}      

  else{ setScaleSchema("A")}}

const buttonPress = async (param: string) => {
console.log(param, 'param')

pitchesPressed.push(param);
console.log(pitchesPressed)

    // THE IDEA -->>>>>>>>>> to switch keys, define root as a number (1-12) then name audio files "1.wav"-"30.wav", use ${parseInt(root) + num}.wav
    const sound = new Audio.Sound();

        switch(param) {

                case "1":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/a.wav`));
                        
                       
                break;
                case "2":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/bb.wav`));
                        
                break;    
                case "3":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/b.wav`));
                        
                      
                break;
                case "4":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/C.wav`));
                        
                break;
                case "5":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/db.wav`));
                        
                break;
                case "6":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/d.wav`));
                        
                break;
                case "7":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/eb.wav`));
                        
                break;
                case "8":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/e.wav`));
                        
                break;    
                case "9":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/f.wav`));
                        
                break;
                case "10":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/Fsharp.wav`));
                        
                break;
                case "11":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/g.wav`));
                        
                break;
                case "12":

                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/ab1.wav`));
                        

                break;
                case "13":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/a1.wav`));
                        
                break;
                case "14":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/bb1.wav`));
                        
                break;
                case "15":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/b1.wav`));
                        
                break;
                case "16":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/C1.wav`));
                        
                break;
                case "17":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/db1.wav`));
                        
                break;
                case "18":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/d1.wav`));
                        
                break;
                case "19":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/eb1.wav`));
                        
                break;
                case "20":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/e1.wav`));
                        
                break;
                case "21":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/e1.wav`));
                        
                break;
                case "22":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/f1.wav`));
                        
                break;
                case "23":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/Fsharp1.wav`));
                        
                break;
                case "24":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/g1.wav`));
                        
                break;
                case "25":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/ab2.wav`));
                        
                break;
                case "26":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/a2.wav`));
                        
                break;
                case "27":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/bb2.wav`));
                        
                        
                break;
                case "28":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/b2.wav`));
                        
                break;
                case "29":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/C2.wav`));
                        
                break;
                case "30":
                        await sound.unloadAsync();
                        await sound.loadAsync(require(`../assets/audio/db2.wav`));
                        
                break;
              

        }

        await sound.playAsync();
}

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}

      { scaleSchema == "A" ?

<Text style={{zIndex: 3000, position: "relative", marginBottom:102, marginRight: 340, fontWeight: "900", fontSize: 22}}>A Maj</Text>
:
<Text style={{zIndex: 3000, position: "relative", marginBottom:102, marginRight: 340, fontWeight: "900", fontSize: 22}}>A Min</Text>

}
<ImageBackground
  source={Fretboard}
  style={{height: 600, width: 220, marginTop: -120,}}
> 

{/* row 1 */}
<View  style={{display: "flex", flexDirection: 'row', marginTop: 35, marginLeft: 0, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 25 }}
        onPressIn={()=>{one ? buttonPress('1'): null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: root1 ? "red" : "teal", padding: 2, opacity: one ? 1 : 0}}>{display1}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{six ? buttonPress('6'): null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: six ? 1 : 0}}>{display6}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{eleven ? buttonPress('11') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: eleven ? 1 : 0}}>{display11}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{sixteen ? buttonPress('16') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: sixteen ? 1 : 0}}>{display16}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twentyOne ? buttonPress('21'): null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyOne ? 1 : 0}}>{display21}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 0}}
        onPress={()=>{a26 ? buttonPress('26'): null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a26 ? 1 : 0}}>{display26}</Text></TouchableOpacity>
</View>

{/* row 2 */}
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:69, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 25}}
        onPress={()=>{two ? buttonPress('2') : null}}><Text style={{backgroundColor: root2 ? "red" : "teal", fontSize: 19, fontWeight: "900", padding: 2, opacity: two ? 1 : 0}}>{display2}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{seven ? buttonPress('7') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2,opacity: seven ? 1 : 0}}>{display7}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twelve ? buttonPress('12') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twelve ? 1 : 0}}>{display12}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{seventeen ? buttonPress('17') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: seventeen ? 1 : 0}}>{display17}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twentyTwo ? buttonPress('22') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyTwo ? 1 : 0}}>{display22}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 0}}
        onPress={()=>{a27 ? buttonPress('27') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a27 ? 1 : 0}}>{display27}</Text></TouchableOpacity>
</View>

{/* row 3 */}
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:69, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 25}}
        onPress={()=>{three ? buttonPress('3') : null}}><Text style={{backgroundColor: root3 ? "red" : "teal", fontSize: 19, fontWeight: "900", padding: 2, opacity: three ? 1 : 0}}>{display3}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{eight ? buttonPress('8') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: eight ? 1 : 0}}>{display8}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{thirteen ? buttonPress('13') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: thirteen ? 1 : 0}}>{display13}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{eighteen ? buttonPress('18') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: eighteen ? 1 : 0}}>{display18}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twentyThree ? buttonPress('23') :null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyThree ? 1 : 0}}>{display23}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{a28 ? buttonPress('28') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a28 ? 1 : 0}}>{display28}</Text></TouchableOpacity>
</View>

{/* row 4 */}
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:69, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{four ? buttonPress('4') : null}}><Text style={{backgroundColor: root4 ? "red" : "teal", fontSize: 19, fontWeight: "900", padding: 2, opacity: four ? 1 : 0}}>{display4}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{nine ? buttonPress('9') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: nine ? 1 : 0}}>{display9}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{fourteen ? buttonPress('14') :null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: fourteen ? 1 : 0}}>{display14}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{nineteen ? buttonPress('19') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: nineteen ? 1 : 0}}>{display19}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twentyFour ? buttonPress('24') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyFour ? 1 : 0}}>{display24}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 0, display: a29 ? "flex" : 'none'}}
        onPress={()=>{a29 ? buttonPress('29'): null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a29 ? 1 : 0}}>{display29}</Text></TouchableOpacity>
</View>

{/* row 5 */}
<View  style={{display: "flex", flexDirection: 'row', marginLeft: 0, marginTop:69, zIndex:220}}>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{five ? buttonPress('5') : null}}><Text style={{backgroundColor: root5 ? "red" : "teal", fontSize: 19, fontWeight: "900", padding: 2, opacity: five ? 1 : 0}}>{display5}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{ten ? buttonPress('10') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: ten ? 1 : 0}}>{display10}</Text></TouchableOpacity>
<TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{fifteen ? buttonPress('15') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: fifteen ? 1 : 0 }}>{display15}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twenty ? buttonPress('20') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twenty ? 1 : 0}}>{display20}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{twentyFive ? buttonPress('25') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: twentyFive ? 1 : 0}}>{display25}</Text></TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 0, marginRight: 27}}
        onPress={()=>{ a30 ? buttonPress('30') : null}}><Text style={{fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2, opacity: a30 ? 1 : 0}}>{display30}</Text></TouchableOpacity>
</View>
</ImageBackground>

<TouchableOpacity style={{marginTop: -22, marginLeft: 10, marginRight: 12}}
        onPress={()=>{checkScaleSchema()}}><Text style={{borderRadius: 10, padding: 8, fontSize: 19, fontWeight: "900", backgroundColor: 'teal'}}>Maj/Min</Text></TouchableOpacity>
<TouchableOpacity style={{marginTop: 12, }}
        onPress={()=>{pitchesPressed=[]; console.log(pitchesPressed)}}><Text style={{borderRadius: 10, padding: 8, fontSize: 19, fontWeight: "900", backgroundColor: 'teal'}}>Clear</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -62,
    zIndex: 2000,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{marginLeft: 10, marginRight: 12},
  buttonText: {fontSize: 19, fontWeight: "900", backgroundColor: 'teal', padding: 2},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 211,
    width: '20%',
  },
});
