import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons';
import logoImg from '../../components/Background/logo-nlw-esports.png';
import { styles } from './styles';
import { GamesParams } from '../../@types/navigation';
import { TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';


export function Games() {

  const navigation = useNavigation();
  const route = useRoute();
  const Games = route.params as GamesParams;

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <view style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Entypo
            name="chevron-thin-left"
            color={THEME.COLORS.CAPTION_300}
            size={20}
            />
        </TouchableOpacity>

        <Image>
        source={logoImg}
        style={styles.logo}
        </Image>

        <View style={styles.right} />
      </view>

      <Image
        source={{ uri: Games.bannerUrl}}
        style={styles.cover}
      />
      
        <Heading 
        title={Games.title}
        subtitle="Conecte-se e comece a jogar!"
      
      />

    </SafeAreaView>
    </Background>
  );
}