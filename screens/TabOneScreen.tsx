import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlightComponent,
  Platform,
} from "react-native";
import { Audio } from "expo-av";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useEffect, useState } from "react";
import { RootTabScreenProps } from "../types";
import Fretboard from "../assets/images/fretmax.png";
import Sound from "react-native-sound";
import { def } from "@vue/shared";

// if generated is true;

// record button presses, iterate until generatedPitches.length

// if generatedPitches == inputPitches
// 	&& inputPitches.length == generatedPitches.length;

// alert('yes')

// check each pitch and give a score.

// compare iterations, return how many correct and display score. save score to localStorage.

let styles;

if (Platform.OS === "web") {
  styles = StyleSheet.create({
    container: {
      marginTop: -62,
      zIndex: 2000,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    },

    button: { marginLeft: 10, marginRight: 12 },
    buttonText: {
      fontSize: 19,
      fontWeight: "900",
      borderRadius: 10,
      backgroundColor: "dodgerblue",
      padding: 2,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 211,
      width: "20%",
    },
  });
}

if (Platform.OS !== "web") {
  styles = StyleSheet.create({
    container: {
      marginTop: -62,
      zIndex: 2000,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    button: { marginLeft: 10, marginRight: 12 },
    buttonText: {
      fontSize: 19,
      fontWeight: "900",
      borderRadius: 10,
      backgroundColor: "dodgerblue",
      padding: 2,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 211,
      width: "20%",
    },
  });
}

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  let pitchesPressed = [];
  let generatedPitches = [];
  let isItGenerated = false;

  const [pitchesWTFPressed, setPitchesWTFPressed] = useState(Array);
  const [arePitchesGenerated, setArePitchesGenerated] = useState(Boolean);
  const [beginningOfPlayback, setBeginningOfPlayback] = useState(
    generatedPitches?.length
  );

  const [currentKey, setCurrentKey] = useState("A");
  const [currentKeyNumber, setCurrentKeyNumber] = useState(10);

  const [isItMinor, setIsItMinor] = useState(true);
  const [natHarm, setNatHarm] = useState("nat");
  const [audioFile, setAudioFile] = useState(false);
  const [one, setone] = useState(Boolean);
  const [two, settwo] = useState(false);
  const [three, setthree] = useState(false);
  const [four, setfour] = useState(false);
  const [five, setfive] = useState(false);
  const [six, setsix] = useState(false);
  const [seven, setseven] = useState(false);
  const [eight, seteight] = useState(false);
  const [nine, setnine] = useState(false);
  const [ten, setten] = useState(false);
  const [eleven, seteleven] = useState(false);
  const [twelve, settwelve] = useState(false);
  const [thirteen, setthirteen] = useState(false);
  const [fourteen, setfourteen] = useState(false);
  const [fifteen, setfifteen] = useState(false);
  const [sixteen, setsixteen] = useState(false);
  const [seventeen, setseventeen] = useState(false);
  const [eighteen, seteighteen] = useState(false);
  const [nineteen, setnineteen] = useState(false);
  const [twenty, settwenty] = useState(false);
  const [twentyOne, settwentyone] = useState(false);
  const [twentyTwo, settwentytwo] = useState(false);
  const [twentyThree, settwentythree] = useState(false);
  const [twentyFour, settwentyfour] = useState(false);
  const [twentyFive, set25] = useState(false);
  const [a26, set26] = useState(false);
  const [a27, set27] = useState(false);
  const [a28, set28] = useState(false);
  const [a29, set29] = useState(false);
  const [a30, set30] = useState(false);
  const [root, setRoot] = useState(true);

  const [rootPitch, setRootPitch] = useState(5); // this is for setting root pitch. see line 293

  const [display1, setDisplay1] = useState(1);
  const [display2, setDisplay2] = useState(2);
  const [display3, setDisplay3] = useState(3);
  const [display4, setDisplay4] = useState(4);
  const [display5, setDisplay5] = useState(5);
  const [display6, setDisplay6] = useState(6);
  const [display7, setDisplay7] = useState(7);
  const [display8, setDisplay8] = useState(8);
  const [display9, setDisplay9] = useState(9);
  const [display10, setDisplay10] = useState(10);
  const [display11, setDisplay11] = useState(11);
  const [display12, setDisplay12] = useState(12);
  const [display13, setDisplay13] = useState(13);
  const [display14, setDisplay14] = useState(14);
  const [display15, setDisplay15] = useState(15);
  const [display16, setDisplay16] = useState(16);
  const [display17, setDisplay17] = useState(17);
  const [display18, setDisplay18] = useState(18);
  const [display19, setDisplay19] = useState(19);
  const [display20, setDisplay20] = useState(20);
  const [display21, setDisplay21] = useState(21);
  const [display22, setDisplay22] = useState(22);
  const [display23, setDisplay23] = useState(23);
  const [display24, setDisplay24] = useState(24);
  const [display25, setDisplay25] = useState(25);
  const [display26, setDisplay26] = useState(26);
  const [display27, setDisplay27] = useState(27);
  const [display28, setDisplay28] = useState(28);
  const [display29, setDisplay29] = useState(29);
  const [display30, setDisplay30] = useState(30);

  // set root, 1-5 only because first string

  const [root1, setRoot1] = useState(false);
  const [root2, setRoot2] = useState(false);
  const [root3, setRoot3] = useState(false);
  const [root4, setRoot4] = useState(false);
  const [root5, setRoot5] = useState(false);

  const [scaleSchema, setScaleSchema] = useState("A");

  useEffect(() => {
    console.log("useEffect returning...");
  }, [one]);

  switch (scaleSchema) {
    case "AbMaj":
      console.log("Ab");

      break;

    case "A":
      console.log("A major");
      if (!one) {
        setRoot1(true);
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

        setDisplay1(1);
        setDisplay2(0);
        setDisplay3(2);
        setDisplay4(0);
        setDisplay5(3);
        setDisplay6(4);
        setDisplay7(0);
        setDisplay8(5);
        setDisplay9(7);
        setDisplay10(6);
        setDisplay11(6);
        setDisplay12(7);
        setDisplay13(1);
        setDisplay14(0);
        setDisplay15(2);
        setDisplay16(0);
        setDisplay17(3);
        setDisplay18(4);
        setDisplay19(0);
        setDisplay20(5);
        setDisplay21(0);
        setDisplay22(0);
        setDisplay23(6);
        setDisplay24(3);
        setDisplay25(7);
        setDisplay26(1);
        setDisplay27(2);
        setDisplay28(2);
        setDisplay29(7);
        setDisplay30(3);
      }
      break;

    case "Amin":
      console.log("b");

      console.log("A minor");
      if (!one) {
        setRoot1(true);
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
        settwenty(true);
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

        setDisplay1(1);
        setDisplay2(0); //
        setDisplay3(2);
        setDisplay4(3);
        setDisplay5(0); //
        setDisplay6(4);
        setDisplay7(0); //
        setDisplay8(5);
        setDisplay9(6);
        setDisplay10(0); //
        setDisplay11(7);
        setDisplay12(7);
        setDisplay13(1);
        setDisplay14(0);
        setDisplay15(2);
        setDisplay16(3);
        setDisplay17(0);
        setDisplay18(4);
        setDisplay19(0);
        setDisplay20(5);
        setDisplay21(5);
        setDisplay22(6);
        setDisplay23(0);
        setDisplay24(7);
        setDisplay25(0);
        setDisplay26(1);
        setDisplay27(0);
        setDisplay28(2);
        setDisplay29(3);
        setDisplay30(0);
      }

      break;

    case "AminHarm":
      console.log("A harm you cunt");

      if (!one) {
        setRoot1(true);
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
        seteleven(false);
        settwelve(true);
        setthirteen(true);
        setfourteen(false);
        setfifteen(true);
        setsixteen(true);
        setseventeen(false);
        seteighteen(true);
        setnineteen(false);
        settwenty(true);
        settwentyone(true);
        settwentytwo(true);
        settwentythree(false);
        settwentyfour(false);
        set25(true);
        set26(true);
        set27(false);
        set28(true);
        set29(true);
        set30(false);

        setDisplay1(1);
        setDisplay2(0); //
        setDisplay3(2);
        setDisplay4(3);
        setDisplay5(0); //
        setDisplay6(4);
        setDisplay7(0); //
        setDisplay8(5);
        setDisplay9(6);
        setDisplay10(0); //
        setDisplay11(7);
        setDisplay12(7);
        setDisplay13(1);
        setDisplay14(0);
        setDisplay15(2);
        setDisplay16(3);
        setDisplay17(0);
        setDisplay18(4);
        setDisplay19(0);
        setDisplay20(5);
        setDisplay21(5);
        setDisplay22(6);
        setDisplay23(0);
        setDisplay24(7);
        setDisplay25(7);
        setDisplay26(1);
        setDisplay27(0);
        setDisplay28(2);
        setDisplay29(3);
        setDisplay30(0);
      }
      break;

    case "C":
      console.log("c");

      break;

    case "Db":
      console.log("Db");

      break;

    case "D":
      console.log("D");

      break;

    case "Eb":
      console.log("Eb");

      break;

    case "E":
      console.log("E");

      break;

    case "F":
      console.log("F");

      break;

    case "F#":
      console.log("F#");

      break;

    case "G":
      console.log("G");

      break;

    default:
      console.log("none");
  }

  const checkScaleSchema = (isItHarmonicMinor) => {
    if (isItHarmonicMinor) {
      setScaleSchema("AminHarm");
    }

    if (!isItHarmonicMinor) {
      setScaleSchema("Amin");
    }

    setone((prevState) => !prevState);
  };

  const setMajorMinor = () => {
    console.log(isItMinor);
    setIsItMinor(!isItMinor);

    if (!isItMinor) {
      setScaleSchema("A");
    }

    if (isItMinor) {
      setScaleSchema("Amin");
    }

    setone((prevState) => !prevState);
  };

  const generate = () => {
    generatedPitches = [];
    pitchesPressed = [];

    let rangeOfPitches = 13;

    let numberOfPitches = 7;

    for (let i = 0; i < numberOfPitches; i++) {
      let myTicket = Math.floor(Math.random() * rangeOfPitches) + 1;
      generatedPitches.push(myTicket.toFixed(0));
    }

    // console.log(typeof(generatedPitches[0]))

    console.log(generatedPitches, "pitches");

    for (var i = 0; i < generatedPitches.length; i++) {
      (function (index) {
        setTimeout(function () {
          console.log(generatedPitches[index]);

          if (scaleSchema == "A") {
            generatedPitches[0] = "1"; // force first pitch to root.
            if (generatedPitches[index] == "2") {
              generatedPitches[index] = "3";
            }
            if (generatedPitches[index] == "4") {
              generatedPitches[index] = "5";
            }
            if (generatedPitches[index] == "7") {
              generatedPitches[index] = "8";
            }
            if (generatedPitches[index] == "9") {
              generatedPitches[index] = "10";
            }
            if (generatedPitches[index] == "11") {
              generatedPitches[index] = "12";
            }
          }

          if (scaleSchema == "Amin") {
            generatedPitches[0] = "1";
            if (generatedPitches[index] == "2") {
              generatedPitches[index] = "3";
            }
            if (generatedPitches[index] == "5") {
              generatedPitches[index] = "4";
            }
            if (generatedPitches[index] == "7") {
              generatedPitches[index] = "8";
            }
            if (generatedPitches[index] == "10") {
              generatedPitches[index] = "9";
            }
            if (generatedPitches[index] == "12") {
              generatedPitches[index] = "11";
            }
          }

          if (scaleSchema == "AminHarm") {
            generatedPitches[0] = "1";
            if (generatedPitches[index] == "2") {
              generatedPitches[index] = "3";
            }
            if (generatedPitches[index] == "5") {
              generatedPitches[index] = "4";
            }
            if (generatedPitches[index] == "7") {
              generatedPitches[index] = "8";
            }
            if (generatedPitches[index] == "10") {
              generatedPitches[index] = "9";
            }
            if (generatedPitches[index] == "11") {
              generatedPitches[index] = "12";
            }
          }

          // let myTime=
          // Math.floor(Math.random() * 7) + 1;r
          // generatedPitches.push(myTime.toFixed(0));
          // console.log(myTime, 'time');

          buttonPress(`${generatedPitches[index]}`);
        }, i * 500);
      })(i);

      console.log(generatedPitches, "gen");
    }

    isItGenerated = true;
  };

  const repeat = () => {
    for (var i = 0; i < generatedPitches.length; i++) {
      (function (index) {
        setTimeout(function () {
          console.log(generatedPitches[index]);

          // let myTime=
          // Math.floor(Math.random() * 7) + 1;r
          // generatedPitches.push(myTime.toFixed(0));
          // console.log(myTime, 'time');

          buttonPress(`${generatedPitches[index]}`);
        }, i * 500);
      })(i);

      console.log(generatedPitches, "gen");
    }
  };

  const buttonPress = async (param: string) => {
    console.log("buttonPress", param);

    console.log(generatedPitches, "generated");

    if (isItGenerated) {
      console.log("it is pressed");
    }

    if (!isItGenerated) {
      console.log("not generated");

      pitchesPressed.push(param);
    }

    console.log(pitchesPressed, "pressed");

    // THE IDEA -->>>>>>>>>> to switch keys, define root as a number (1-12) then name audio files "1.wav"-"30.wav", use ${parseInt(root) + num}.wav
    const sound = new Audio.Sound();

    switch (param) {
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
      default:
        return;
    }

    await sound.playAsync();
    setTimeout(async () => {
      await sound.unloadAsync();
    }, 1000);

    console.log(
      pitchesPressed.length,
      "pressed length",
      generatedPitches.length,
      "generated length"
    );

    if (pitchesPressed.length == generatedPitches.length) {
      console.log("length reached");
      let arrayOfCorrectAnswers = [];

      for (let x = 0; x < generatedPitches.length; x++) {
        if (generatedPitches[x] == pitchesPressed[x]) {
          arrayOfCorrectAnswers.push(true);

          // localStorage.setItem("items", JSON.stringify(items));
        } else {
          arrayOfCorrectAnswers.push(false);
        }
      }
      console.log(arrayOfCorrectAnswers);

      let theNumberCorrect = 0;

      arrayOfCorrectAnswers.forEach((item) =>
        item == true ? theNumberCorrect++ : null
      );

      alert(
        theNumberCorrect + " out of 7 - " + arrayOfCorrectAnswers.toString()
      );

      arrayOfCorrectAnswers = [];
      pitchesPressed = [];
      generatedPitches = [];
    }
  };

  const checkScale = (parameter) => {
    console.log(parameter);

    switch (parameter) {
      case 0:
        setCurrentKeyNumber(12);
        setCurrentKey("B");
        setone((prevState) => !prevState);

      case 1:
        setCurrentKey("C");
        setone((prevState) => !prevState);
        break;
      case 2:
        setCurrentKey("Db");
        setone((prevState) => !prevState);

        break;
      case 3:
        setCurrentKey("D");
        setone((prevState) => !prevState);

        break;
      case 4:
        setCurrentKey("Eb");
        setone((prevState) => !prevState);

        break;
      case 5:
        setCurrentKey("E");
        setone((prevState) => !prevState);

        break;
      case 6:
        setCurrentKey("F");
        setone((prevState) => !prevState);

        break;
      case 7:
        setCurrentKey("F#");
        setone((prevState) => !prevState);

        break;
      case 8:
        setCurrentKey("G");
        setone((prevState) => !prevState);

        break;
      case 9:
        setCurrentKey("Ab");
        setone((prevState) => !prevState);

        break;
      case 10:
        setCurrentKey("A");
        setone((prevState) => !prevState);

        break;
      case 11:
        setCurrentKey("Bb");
        setone((prevState) => !prevState);

        break;
      case 12:
        setCurrentKey("B");
        setone((prevState) => !prevState);

        break;
      default:
        setCurrentKey("C");
        setone((prevState) => !prevState);
        setCurrentKeyNumber(1);
        return;
    }
  };

  return (
    <View style={styles.container}>
      {isItMinor ? <View style={{ marginBottom: 30 }}></View> : null}

      {scaleSchema == "Amin" ? (
        <TouchableOpacity
          style={{ marginBottom: -11 }}
          onPressIn={() => {
            checkScaleSchema(true);
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
              padding: 8,
              borderRadius: 10,
              opacity: one ? 1 : 0,
            }}
          >
            Natural
          </Text>
        </TouchableOpacity>
      ) : null}

      {scaleSchema == "AminHarm" ? (
        <TouchableOpacity
          style={{ marginBottom: -11 }}
          onPressIn={() => {
            checkScaleSchema(false);
          }}
        >
          <Text
            style={{
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
              padding: 8,
              borderRadius: 10,
              opacity: one ? 1 : 0,
            }}
          >
            Harmonic
          </Text>
        </TouchableOpacity>
      ) : null}
      {scaleSchema == "A" ? (
        <Text
          style={{
            zIndex: 3000,
            position: "relative",
            marginBottom: 102,
            marginRight: 340,
            fontWeight: "900",
            fontSize: 22,
          }}
        >
          {currentKey} Maj
        </Text>
      ) : (
        <Text
          style={{
            zIndex: 3000,
            position: "relative",
            marginBottom: 102,
            marginRight: 340,
            fontWeight: "900",
            fontSize: 22,
          }}
        >
          {currentKey} Min
        </Text>
      )}

      <ImageBackground
        source={Fretboard}
        style={{ height: 640, width: 250, marginTop: -140 }}
      >
        {/* row 1 */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 35,
            marginLeft: 0,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 1, marginRight: 18 }}
            onPressIn={() => {
              isItGenerated = false;
              one ? buttonPress("1") : null;
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                backgroundColor: root1 ? "red" : "dodgerblue",
                padding: 8,
                borderRadius: 10,
                opacity: one ? 1 : 0,
              }}
            >
              {display1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 17 }}
            onPress={() => {
              six ? buttonPress("6") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: six ? 1 : 1,
              }}
            >
              {display6}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              eleven ? buttonPress("11") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: eleven ? 1 : 0,
              }}
            >
              {display11}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              sixteen ? buttonPress("16") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: sixteen ? 1 : 0,
              }}
            >
              {display16}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twentyOne ? buttonPress("21") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twentyOne ? 1 : 0,
              }}
            >
              {display21}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 0 }}
            onPress={() => {
              isItGenerated = false;
              a26 ? buttonPress("26") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: a26 ? 1 : 0,
              }}
            >
              {display26}
            </Text>
          </TouchableOpacity>
        </View>

        {/* row 2 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 0,
            marginTop: 65,
            zIndex: 220,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 1, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              two ? buttonPress("2") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                backgroundColor: root2 ? "red" : "dodgerblue",
                fontSize: 19,
                fontWeight: "900",
                padding: 8,
                opacity: two ? 1 : 0,
              }}
            >
              {display2}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 17 }}
            onPress={() => {
              isItGenerated = false;
              seven ? buttonPress("7") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: seven ? 1 : 0,
              }}
            >
              {display7}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twelve ? buttonPress("12") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twelve ? 1 : 0,
              }}
            >
              {display12}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              seventeen ? buttonPress("17") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: seventeen ? 1 : 0,
              }}
            >
              {display17}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twentyTwo ? buttonPress("22") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twentyTwo ? 1 : 0,
              }}
            >
              {display22}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 0 }}
            onPress={() => {
              isItGenerated = false;
              a27 ? buttonPress("27") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: a27 ? 1 : 0,
              }}
            >
              {display27}
            </Text>
          </TouchableOpacity>
        </View>

        {/* row 3 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 0,
            marginTop: 65,
            zIndex: 220,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 1, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              three ? buttonPress("3") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                backgroundColor: root3 ? "red" : "dodgerblue",
                borderRadius: 10,
                fontSize: 19,
                fontWeight: "900",
                padding: 8,
                opacity: three ? 1 : 0,
              }}
            >
              {display3}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 17 }}
            onPress={() => {
              isItGenerated = false;
              eight ? buttonPress("8") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: eight ? 1 : 0,
              }}
            >
              {display8}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              thirteen ? buttonPress("13") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: thirteen ? 1 : 0,
              }}
            >
              {display13}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              eighteen ? buttonPress("18") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: eighteen ? 1 : 0,
              }}
            >
              {display18}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twentyThree ? buttonPress("23") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twentyThree ? 1 : 0,
              }}
            >
              {display23}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 0 }}
            onPress={() => {
              isItGenerated = false;
              a28 ? buttonPress("28") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: a28 ? 1 : 0,
              }}
            >
              {display28}
            </Text>
          </TouchableOpacity>
        </View>

        {/* row 4 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 0,
            marginTop: 65,
            zIndex: 220,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 1, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              four ? buttonPress("4") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                backgroundColor: root4 ? "red" : "dodgerblue",
                borderRadius: 10,
                fontSize: 19,
                fontWeight: "900",
                padding: 8,
                opacity: four ? 1 : 0,
              }}
            >
              {display4}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 17 }}
            onPress={() => {
              isItGenerated = false;
              nine ? buttonPress("9") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: nine ? 1 : 0,
              }}
            >
              {display9}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              fourteen ? buttonPress("14") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: fourteen ? 1 : 0,
              }}
            >
              {display14}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              nineteen ? buttonPress("19") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: nineteen ? 1 : 0,
              }}
            >
              {display19}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twentyFour ? buttonPress("24") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twentyFour ? 1 : 0,
              }}
            >
              {display24}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 0 }}
            onPress={() => {
              isItGenerated = false;
              a29 ? buttonPress("29") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: a29 ? 1 : 0,
              }}
            >
              {display29}
            </Text>
          </TouchableOpacity>
        </View>

        {/* row 5 */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 0,
            marginTop: 57,
            zIndex: 220,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              five ? buttonPress("5") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                backgroundColor: root5 ? "red" : "dodgerblue",
                borderRadius: 10,
                fontSize: 19,
                fontWeight: "900",
                padding: 8,
                opacity: five ? 1 : 0,
              }}
            >
              {display5}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 17 }}
            onPress={() => {
              isItGenerated = false;
              ten ? buttonPress("10") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: ten ? 1 : 0,
              }}
            >
              {display10}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              fifteen ? buttonPress("15") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: fifteen ? 1 : 0,
              }}
            >
              {display15}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twenty ? buttonPress("20") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twenty ? 1 : 0,
              }}
            >
              {display20}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 18 }}
            onPress={() => {
              isItGenerated = false;
              twentyFive ? buttonPress("25") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: twentyFive ? 1 : 0,
              }}
            >
              {display25}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 0, marginRight: 0 }}
            onPress={() => {
              isItGenerated = false;
              a30 ? buttonPress("30") : null;
              setArePitchesGenerated(false);
            }}
          >
            <Text
              style={{
                fontSize: 19,
                fontWeight: "900",
                borderRadius: 10,
                backgroundColor: "dodgerblue",
                padding: 8,
                opacity: a30 ? 1 : 0,
              }}
            >
              {display30}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: -48,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{}}
          onPress={() => {
            if (currentKeyNumber > 0) {
              let wtf = currentKeyNumber - 1;
              setCurrentKeyNumber(currentKeyNumber - 1);
              checkScale(wtf);
            }
          }}
        >
          <Text
            style={{
              marginRight: 6,
              borderRadius: 10,
              padding: 8,
              textAlign: "center",
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
            }}
          >
            --
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            setMajorMinor();
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              marginRight: 5,
              padding: 8,
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
            }}
          >
            Maj/Min
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            pitchesPressed = [];
            console.log(pitchesPressed);
            generatedPitches = [];
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              padding: 8,
              textAlign: "center",
              display: "none",
              marginRight: 5,
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
            }}
          >
            Clear
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            console.log(generatedPitches, "working?");
            repeat();
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              marginLeft: 5,
              marginRight: 9,
              padding: 8,
              textAlign: "center",
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
            }}
          >
            🔃
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            generate();
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              padding: 8,
              textAlign: "center",
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
            }}
          >
            Generate
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            if (currentKeyNumber < 13) {
              let wtf = currentKeyNumber + 1;
              setCurrentKeyNumber(currentKeyNumber + 1);
              checkScale(wtf);
            }
          }}
        >
          <Text
            style={{
              marginLeft: 6,
              borderRadius: 10,
              padding: 8,
              textAlign: "center",
              fontSize: 19,
              fontWeight: "900",
              backgroundColor: "dodgerblue",
            }}
          >
            ++
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
