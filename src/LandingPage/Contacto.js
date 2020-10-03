import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native-web";
import { useWindowSize } from "../hooks/useWindowSize";
import { fonts } from "../constantes/Temas";

function Contacto({ contacto, setshowForm }) {
  let { height, width, isMobile } = useWindowSize(1);

  return (
    <View
      ref={contacto}
      style={{
        height: isMobile ? 800 : (width * 3) / 7,
        width: width,
        justifyContent: "flex-start",
        backgroundColor: "#D8DADE",
        //paddingTop: 50,
      }}
    >
      <View
        style={{
          width: width,
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "center",
          height: isMobile ? "auto" : "100%",
          //backgroundColor: 'red',
        }}
      >
        <View
          style={[
            {
              height: isMobile ? 300 : "90%",
              width: isMobile ? width : width * 0.4,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            },
            //isMobile ? { paddingRight: 100 } : {},
          ]}
        >
          <Image
            source={{
              uri:
                "https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/ruta.png?alt=media&token=9defd3e9-d815-4020-a847-65e5f1aa68c6",
            }}
            style={{
              height: isMobile ? 400 : "100%",
              width: isMobile ? width * 0.5 : width * 0.3,
              resizeMode: "contain",
              right: isMobile ? 80 : "-10%",
              position: "absolute",
              //backgroundColor: 'red',
            }}
          />
          <Image
            source={{
              uri:
                "https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/auto.png?alt=media&token=84f87831-6dab-41c3-a984-692eea9b9018",
            }}
            style={[
              {
                position: "absolute",
                height: isMobile ? 300 : "60%",
                width: isMobile ? width : width * 0.4,
                resizeMode: "contain",
                bottom: isMobile ? -70 : "-15%",
              },
              isMobile ? { left: -50 } : {},
            ]}
          />
        </View>

        <View
          style={{
            padding: 10,
            width: isMobile ? width * 0.9 : width * 0.5,
            height: isMobile ? 430 : "60%",
            justifyContent: isMobile ? "flex-start" : "center",
            marginLeft: isMobile ? 0 : 30,
            alignItems: isMobile ? "center" : "flex-start",
            paddingTop: isMobile ? 50 : 0,
            //marginBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", marginBottom: 20, fontSize: 25 }}>
            CONTÁCTANOS
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fonFamily: fonts.acumin,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Celular:
            </Text>
            <Text style={{ fonFamily: fonts.acumin, fontSize: 18 }}>
              {" "}
              +51 961 995 146
            </Text>
          </View>
          <View
            style={{
              marginBottom: 20,
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <Text
              style={{
                fonFamily: fonts.acumin,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Correo electrónico:
            </Text>
            <Text style={{ fonFamily: fonts.acuminv, fontSize: 18 }}>
              hawkseguridad1@gmail.com
            </Text>
          </View>
          <Text style={{ fonFamily: fonts.acumin, fontSize: 18 }}>
            Si tiene dudas o sugerencias.
          </Text>
          <TouchableOpacity
            style={{
              padding: 5,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#009938",
              borderRadius: 5,
              maxWidth: 350,
              marginTop: 10,
            }}
          >
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/whats.png?alt=media&token=020313df-a032-406a-8a7b-962aadf34258",
              }}
              style={{
                marginLeft: 10,
                width: 25,
                height: 25,
                marginRight: 10,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                fontFamily: fonts.acumin,
              }}
            >
              Escríbenos al Whatsapp
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#E0040B",
              borderRadius: 5,
              maxWidth: 400,
              marginTop: 10,
            }}
            onPress={() => {
              setshowForm(true);
            }}
          >
            <Image
              source={{
                uri:
                  "https://firebasestorage.googleapis.com/v0/b/hawk-peru.appspot.com/o/gmail.png?alt=media&token=88238aba-d7af-4d43-b411-7bea97038bb6",
              }}
              style={{
                marginLeft: 10,
                width: 25,
                height: 25,
                marginRight: 10,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                fontFamily: fonts.acumin,
              }}
            >
              Enviar un correo electrónico
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Contacto;
