import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { Entypo } from '@expo/vector-icons';
import logoImg from '../../components/Background/logo-nlw-esports.png';
import { styles } from './styles';
import { GamesParams } from '../../@types/navigation';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';


export function Games() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const Games = route.params as GamesParams;

  function handleGoBack(){
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://172.25.192.1:3333/games/${Games.id}/ads`)
    .then(response => response.json())
    .then(data => setDuos(data));
},[]);

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
        <Image/>

        <View style={styles.right} />
      </view>

        <Image>
        source={{ uri: Games.bannerUrl}}
        style={styles.cover}
        resizeMode="cover"
        <Image/>
      
        <Heading 
        title={Games.title}
        subtitle="Conecte-se e comece a jogar!"
      
      />

      <FlatList
        data={duos}
        keyExtractor={ item => item.id}
        renderItem={({ item }) => {
          <DuoCard 
          data={item} 
          onConnect={() => {}}
          />
        }}
        horizontal
        contentContainerStyle={[ duos.length > 0 ? styles.contentList : styles.emptyListContent]}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Não há anúncios publicados ainda.
          </Text>
        )}
        />
        
        <DuoMatch 
          visible={discordDuoSelected.length > 0}
          discord="Piga#2323"
          onClose={() => setDiscordDuoSelected('')}
        />
    </SafeAreaView>
    </Background>
  );
}