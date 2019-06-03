import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col ,Table} from 'reactstrap';
import Header from '../components/Header';
export default class Universities extends Component {
  state={
    universities:[
      {
          "id": 0,
          "name": "Abant İzzet Baysal Üniversitesi",
          "city": "Bolu",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "ibu.edu.tr"
      },
      {
          "id": 1,
          "name": "Abdullah Gül Üniversitesi",
          "city": "Kayseri",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "agu.edu.tr"
      },
      {
          "id": 2,
          "name": "Adana Bilim ve Teknoloji Üniversitesi",
          "city": "Adana",
          "founded_at": "2011",
          "type": "Devlet",
          "web_page": "adanabtu.edu.tr"
      },
      {
          "id": 3,
          "name": "Adıyaman Üniversitesi",
          "city": "Adıyaman",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "adiyaman.edu.tr"
      },
      {
          "id": 4,
          "name": "Adnan Menderes Üniversitesi",
          "city": "Aydın",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "adu.edu.tr"
      },
      {
          "id": 5,
          "name": "Afyon Kocatepe Üniversitesi",
          "city": "Afyonkarahisar",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "aku.edu.tr"
      },
      {
          "id": 6,
          "name": "Ağrı İbrahim Çeçen Üniversitesi",
          "city": "Ağrı",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "agri.edu.tr"
      },
      {
          "id": 7,
          "name": "Ahi Evran Üniversitesi",
          "city": "Kırşehir",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "ahievran.edu.tr"
      },
      {
          "id": 8,
          "name": "Akdeniz Üniversitesi",
          "city": "Antalya",
          "founded_at": "1982",
          "type": "Devlet",
          "web_page": "akdeniz.edu.tr"
      },
      {
          "id": 9,
          "name": "Aksaray Üniversitesi",
          "city": "Aksaray",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "aksaray.edu.tr"
      },
      {
          "id": 10,
          "name": "Alanya Alaaddin Keykubat Üniversitesi",
          "city": "Antalya",
          "founded_at": "2015",
          "type": "Devlet",
          "web_page": "alanyaaku.edu.tr"
      },
      {
          "id": 11,
          "name": "Amasya Üniversitesi",
          "city": "Amasya",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "amasya.edu.tr"
      },
      {
          "id": 12,
          "name": "Anadolu Üniversitesi",
          "city": "Eskişehir",
          "founded_at": "1958",
          "type": "Devlet",
          "web_page": "anadolu.edu.tr"
      },
      {
          "id": 13,
          "name": "Ankara Üniversitesi",
          "city": "Ankara",
          "founded_at": "1946",
          "type": "Devlet",
          "web_page": "ankara.edu.tr"
      },
      {
          "id": 14,
          "name": "Ankara Sosyal Bilimler Üniversitesi",
          "city": "Ankara",
          "founded_at": "2013",
          "type": "Devlet",
          "web_page": "asbu.edu.tr"
      },
      {
          "id": 15,
          "name": "Ardahan Üniversitesi",
          "city": "Ardahan",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "ardahan.edu.tr"
      },
      {
          "id": 16,
          "name": "Artvin Çoruh Üniversitesi",
          "city": "Artvin",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "artvin.edu.tr"
      },
      {
          "id": 17,
          "name": "Atatürk Üniversitesi",
          "city": "Erzurum",
          "founded_at": "1954",
          "type": "Devlet",
          "web_page": "atauni.edu.tr"
      },
      {
          "id": 18,
          "name": "Balıkesir Üniversitesi",
          "city": "Balıkesir",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "balikesir.edu.tr"
      },
      {
          "id": 19,
          "name": "Bandırma Onyedi Eylül Üniversitesi",
          "city": "Balıkesir",
          "founded_at": "2015",
          "type": "Devlet",
          "web_page": "bandirma.edu.tr"
      },
      {
          "id": 20,
          "name": "Bartın Üniversitesi",
          "city": "Bartın",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "bartin.edu.tr"
      },
      {
          "id": 21,
          "name": "Batman Üniversitesi",
          "city": "Batman",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "batman.edu.tr"
      },
      {
          "id": 22,
          "name": "Bayburt Üniversitesi",
          "city": "Bayburt",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "bayburt.edu.tr"
      },
      {
          "id": 23,
          "name": "Bilecik Şeyh Edebali Üniversitesi",
          "city": "Bilecik",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "bilecik.edu.tr"
      },
      {
          "id": 24,
          "name": "Bingöl Üniversitesi",
          "city": "Bingöl",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "bingol.edu.tr"
      },
      {
          "id": 25,
          "name": "Bitlis Eren Üniversitesi",
          "city": "Bitlis",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "beu.edu.tr"
      },
      {
          "id": 26,
          "name": "Boğaziçi Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1863",
          "type": "Devlet",
          "web_page": "boun.edu.tr"
      },
      {
          "id": 27,
          "name": "Bozok Üniversitesi",
          "city": "Yozgat",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "bozok.edu.tr"
      },
      {
          "id": 28,
          "name": "Bursa Teknik Üniversitesi",
          "city": "Bursa",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "btu.edu.tr"
      },
      {
          "id": 29,
          "name": "Celal Bayar Üniversitesi",
          "city": "Manisa",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "bayar.edu.tr"
      },
      {
          "id": 30,
          "name": "Cumhuriyet Üniversitesi",
          "city": "Sivas",
          "founded_at": "1974",
          "type": "Devlet",
          "web_page": "cumhuriyet.edu.tr"
      },
      {
          "id": 31,
          "name": "Çanakkale Onsekiz Mart Üniversitesi",
          "city": "Çanakkale",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "comu.edu.tr"
      },
      {
          "id": 32,
          "name": "Çankırı Karatekin Üniversitesi",
          "city": "Çankırı",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "karatekin.edu.tr"
      },
      {
          "id": 33,
          "name": "Çukurova Üniversitesi",
          "city": "Adana",
          "founded_at": "1973",
          "type": "Devlet",
          "web_page": "cu.edu.tr"
      },
      {
          "id": 34,
          "name": "Deniz Harp Okulu",
          "city": "İstanbul",
          "founded_at": "1773",
          "type": "Devlet",
          "web_page": "dho.edu.tr"
      },
      {
          "id": 35,
          "name": "Dicle Üniversitesi",
          "city": "Diyarbakır",
          "founded_at": "1974",
          "type": "Devlet",
          "web_page": "dicle.edu.tr"
      },
      {
          "id": 36,
          "name": "Dokuz Eylül Üniversitesi",
          "city": "İzmir",
          "founded_at": "1982",
          "type": "Devlet",
          "web_page": "deu.edu.tr"
      },
      {
          "id": 37,
          "name": "Dumlupınar Üniversitesi",
          "city": "Kütahya",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "dpu.edu.tr"
      },
      {
          "id": 38,
          "name": "Düzce Üniversitesi",
          "city": "Düzce",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "duzce.edu.tr"
      },
      {
          "id": 39,
          "name": "Ege Üniversitesi",
          "city": "İzmir",
          "founded_at": "1955",
          "type": "Devlet",
          "web_page": "erciyes.edu.tr"
      },
      {
          "id": 40,
          "name": "Erzincan Üniversitesi",
          "city": "Erzincan",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "erzincan.edu.tr"
      },
      {
          "id": 41,
          "name": "Erzurum Teknik Üniversitesi",
          "city": "Erzurum",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "erzurum.edu.tr"
      },
      {
          "id": 42,
          "name": "Eskişehir Osmangazi Üniversitesi",
          "city": "Eskişehir",
          "founded_at": "1970",
          "type": "Devlet",
          "web_page": "ogu.edu.tr"
      },
      {
          "id": 43,
          "name": "Fırat Üniversitesi",
          "city": "Elâzığ",
          "founded_at": "1967",
          "type": "Devlet",
          "web_page": "firat.edu.tr"
      },
      {
          "id": 44,
          "name": "Galatasaray Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "gsu.edu.tr"
      },
      {
          "id": 45,
          "name": "Gazi Üniversitesi",
          "city": "Ankara",
          "founded_at": "1926",
          "type": "Devlet",
          "web_page": "gazi.edu.tr"
      },
      {
          "id": 46,
          "name": "Gaziantep Üniversitesi",
          "city": "Gaziantep",
          "founded_at": "1973",
          "type": "Devlet",
          "web_page": "gantep.edu.tr"
      },
      {
          "id": 47,
          "name": "Gaziosmanpaşa Üniversitesi",
          "city": "Tokat",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "gop.edu.tr"
      },
      {
          "id": 48,
          "name": "Gebze Teknik Üniversitesi",
          "city": "Kocaeli",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "gtu.edu.tr"
      },
      {
          "id": 49,
          "name": "Giresun Üniversitesi",
          "city": "Giresun",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "giresun.edu.tr"
      },
      {
          "id": 50,
          "name": "Gümüşhane Üniversitesi",
          "city": "Gümüşhane",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "gumushane.edu.tr"
      },
      {
          "id": 51,
          "name": "Hacettepe Üniversitesi",
          "city": "Ankara",
          "founded_at": "1957",
          "type": "Devlet",
          "web_page": "hacettepe.edu.tr"
      },
      {
          "id": 52,
          "name": "Hakkari Üniversitesi",
          "city": "Hakkari",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "hakkari.edu.tr"
      },
      {
          "id": 53,
          "name": "Harran Üniversitesi",
          "city": "Şanlıurfa",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "harran.edu.tr"
      },
      {
          "id": 54,
          "name": "Hava Harp Okulu",
          "city": "İstanbul",
          "founded_at": "1951",
          "type": "Devlet",
          "web_page": "hho.edu.tr"
      },
      {
          "id": 55,
          "name": "Hitit Üniversitesi",
          "city": "Çorum",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "hitit.edu.tr"
      },
      {
          "id": 56,
          "name": "Iğdır Üniversitesi",
          "city": "Iğdır",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "igdir.edu.tr"
      },
      {
          "id": 57,
          "name": "İnönü Üniversitesi",
          "city": "Malatya",
          "founded_at": "1975",
          "type": "Devlet",
          "web_page": "inonu.edu.tr"
      },
      {
          "id": 58,
          "name": "İskenderun Teknik Üniversitesi",
          "city": "Hatay",
          "founded_at": "2015",
          "type": "Devlet",
          "web_page": "iste.edu.tr"
      },
      {
          "id": 59,
          "name": "İstanbul Medeniyet Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "medeniyet.edu.tr"
      },
      {
          "id": 60,
          "name": "İstanbul Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1453",
          "type": "Devlet",
          "web_page": "istanbul.edu.tr"
      },
      {
          "id": 61,
          "name": "İstanbul Teknik Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1773",
          "type": "Devlet",
          "web_page": "itu.edu.tr"
      },
      {
          "id": 62,
          "name": "İzmir Bakırçay Üniversitesi",
          "city": "İzmir",
          "founded_at": "2016",
          "type": "Devlet",
          "web_page": ""
      },
      {
          "id": 63,
          "name": "İzmir Demokrasi Üniversitesi",
          "city": "İzmir",
          "founded_at": "2016",
          "type": "Devlet",
          "web_page": ""
      },
      {
          "id": 64,
          "name": "İzmir Kâtip Çelebi Üniversitesi",
          "city": "İzmir",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "ikc.edu.tr"
      },
      {
          "id": 65,
          "name": "İzmir Yüksek Teknoloji Enstitüsü",
          "city": "İzmir",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "iyte.edu.tr"
      },
      {
          "id": 66,
          "name": "Kafkas Üniversitesi",
          "city": "Kars",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "kafkas.edu.tr"
      },
      {
          "id": 67,
          "name": "Kahramanmaraş Sütçü İmam Üniversitesi",
          "city": "Kahramanmaraş",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "ksu.edu.tr"
      },
      {
          "id": 68,
          "name": "Karabük Üniversitesi",
          "city": "Karabük",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "karabuk.edu.tr"
      },
      {
          "id": 69,
          "name": "Karadeniz Teknik Üniversitesi",
          "city": "Trabzon",
          "founded_at": "1955",
          "type": "Devlet",
          "web_page": "ktu.edu.tr"
      },
      {
          "id": 70,
          "name": "Karamanoğlu Mehmetbey Üniversitesi",
          "city": "Karaman",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "kmu.edu.tr"
      },
      {
          "id": 71,
          "name": "Kara Harp Okulu",
          "city": "Ankara",
          "founded_at": "1834",
          "type": "Devlet",
          "web_page": "Kara Harp Okulu"
      },
      {
          "id": 72,
          "name": "Kastamonu Üniversitesi",
          "city": "Kastamonu",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "kastamonu.edu.tr"
      },
      {
          "id": 73,
          "name": "Kırıkkale Üniversitesi",
          "city": "Kırıkkale",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "kku.edu.tr"
      },
      {
          "id": 74,
          "name": "Kırklareli Üniversitesi",
          "city": "Kırklareli",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "kirklareli.edu.tr"
      },
      {
          "id": 75,
          "name": "Kilis 7 Aralık Üniversitesi",
          "city": "Kilis",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "kilis.edu.tr"
      },
      {
          "id": 76,
          "name": "Kocaeli Üniversitesi",
          "city": "Kocaeli",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "kocaeli.edu.tr"
      },
      {
          "id": 77,
          "name": "Necmettin Erbakan Üniversitesi",
          "city": "Konya",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "konya.edu.tr"
      },
      {
          "id": 78,
          "name": "Mardin Artuklu Üniversitesi",
          "city": "Mardin",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "artuklu.edu.tr"
      },
      {
          "id": 79,
          "name": "Marmara Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1883",
          "type": "Devlet",
          "web_page": "marmara.edu.tr"
      },
      {
          "id": 80,
          "name": "Mehmet Akif Ersoy Üniversitesi",
          "city": "Burdur",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "mehmetakif.edu.tr"
      },
      {
          "id": 81,
          "name": "Mersin Üniversitesi",
          "city": "Mersin",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "mersin.edu.tr"
      },
      {
          "id": 82,
          "name": "Mimar Sinan Güzel Sanatlar Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1882",
          "type": "Devlet",
          "web_page": "msgsu.edu.tr"
      },
      {
          "id": 83,
          "name": "Muğla Sıtkı Koçman Üniversitesi",
          "city": "Muğla",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "mu.edu.tr"
      },
      {
          "id": 84,
          "name": "Milli Savunma Üniversitesi",
          "city": "",
          "founded_at": "2016",
          "type": "Devlet",
          "web_page": ""
      },
      {
          "id": 85,
          "name": "Mustafa Kemal Üniversitesi",
          "city": "Hatay",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "mku.edu.tr"
      },
      {
          "id": 86,
          "name": "Muş Alparslan Üniversitesi",
          "city": "Muş",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "alparslan.edu.tr"
      },
      {
          "id": 87,
          "name": "Namık Kemal Üniversitesi",
          "city": "Tekirdağ",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "nku.edu.tr"
      },
      {
          "id": 88,
          "name": "Nevşehir Hacı Bektaş Veli Üniversitesi",
          "city": "Nevşehir",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "nevsehir.edu.tr"
      },
      {
          "id": 89,
          "name": "Niğde Üniversitesi",
          "city": "Niğde",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "nigde.edu.tr"
      },
      {
          "id": 90,
          "name": "Ondokuz Mayıs Üniversitesi",
          "city": "Samsun",
          "founded_at": "1975",
          "type": "Devlet",
          "web_page": "omu.edu.tr"
      },
      {
          "id": 91,
          "name": "Ordu Üniversitesi",
          "city": "Ordu",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "odu.edu.tr"
      },
      {
          "id": 92,
          "name": "Orta Doğu Teknik Üniversitesi",
          "city": "Ankara",
          "founded_at": "1956",
          "type": "Devlet",
          "web_page": "odtu.edu.tr"
      },
      {
          "id": 93,
          "name": "Osmaniye Korkut Ata Üniversitesi",
          "city": "Osmaniye",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "osmaniye.edu.tr"
      },
      {
          "id": 94,
          "name": "Pamukkale Üniversitesi",
          "city": "Denizli",
          "founded_at": "1976",
          "type": "Devlet",
          "web_page": "pamukkale.edu.tr"
      },
      {
          "id": 95,
          "name": "Polis Akademisi",
          "city": "Ankara",
          "founded_at": "1937",
          "type": "Devlet",
          "web_page": "pa.edu.tr"
      },
      {
          "id": 96,
          "name": "Recep Tayyip Erdoğan Üniversitesi",
          "city": "Rize",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "erdogan.edu.tr"
      },
      {
          "id": 97,
          "name": "Sahil Güvenlik Akademisi",
          "city": "Ankara",
          "founded_at": "2016",
          "type": "Devlet",
          "web_page": "sga.edu.tr[41]"
      },
      {
          "id": 98,
          "name": "Sakarya Üniversitesi",
          "city": "Sakarya",
          "founded_at": "1970",
          "type": "Devlet",
          "web_page": "sakarya.edu.tr"
      },
      {
          "id": 99,
          "name": "Selçuk Üniversitesi",
          "city": "Konya",
          "founded_at": "1975",
          "type": "Devlet",
          "web_page": "selcuk.edu.tr"
      },
      {
          "id": 100,
          "name": "Siirt Üniversitesi",
          "city": "Siirt",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "siirt.edu.tr"
      },
      {
          "id": 101,
          "name": "Sinop Üniversitesi",
          "city": "Sinop",
          "founded_at": "2007",
          "type": "Devlet",
          "web_page": "sinop.edu.tr"
      },
      {
          "id": 102,
          "name": "Süleyman Demirel Üniversitesi",
          "city": "Isparta",
          "founded_at": "1976",
          "type": "Devlet",
          "web_page": "sdu.edu.tr"
      },
      {
          "id": 103,
          "name": "Şırnak Üniversitesi",
          "city": "Şırnak",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "sirnak.edu.tr"
      },
      {
          "id": 104,
          "name": "Trakya Üniversitesi",
          "city": "Edirne",
          "founded_at": "1982",
          "type": "Devlet",
          "web_page": "trakya.edu.tr"
      },
      {
          "id": 105,
          "name": "Tunceli Üniversitesi",
          "city": "Tunceli",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "tunceli.edu.tr"
      },
      {
          "id": 106,
          "name": "Türk Alman Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "tau.edu.tr"
      },
      {
          "id": 107,
          "name": "Sağlık Bilimleri Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2015",
          "type": "Devlet",
          "web_page": "sbu.edu.tr"
      },
      {
          "id": 108,
          "name": "Türkiye Uluslararası İslam, Bilim ve Teknoloji Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2015",
          "type": "Devlet",
          "web_page": ""
      },
      {
          "id": 109,
          "name": "Uludağ Üniversitesi",
          "city": "Bursa",
          "founded_at": "1970",
          "type": "Devlet",
          "web_page": "uludag.edu.tr"
      },
      {
          "id": 110,
          "name": "Uşak Üniversitesi",
          "city": "Uşak",
          "founded_at": "2006",
          "type": "Devlet",
          "web_page": "usak.edu.tr"
      },
      {
          "id": 111,
          "name": "Yalova Üniversitesi",
          "city": "Yalova",
          "founded_at": "2008",
          "type": "Devlet",
          "web_page": "yalova.edu.tr"
      },
      {
          "id": 112,
          "name": "Yıldız Teknik Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1911",
          "type": "Devlet",
          "web_page": "yildiz.edu.tr"
      },
      {
          "id": 113,
          "name": "Yıldırım Beyazıt Üniversitesi",
          "city": "Ankara",
          "founded_at": "2010",
          "type": "Devlet",
          "web_page": "ybu.edu.tr"
      },
      {
          "id": 114,
          "name": "Yüzüncü Yıl Üniversitesi",
          "city": "Van",
          "founded_at": "1982",
          "type": "Devlet",
          "web_page": "yyu.edu.tr"
      },
      {
          "id": 115,
          "name": "Bülent Ecevit Üniversitesi",
          "city": "Zonguldak",
          "founded_at": "1992",
          "type": "Devlet",
          "web_page": "beun.edu.tr"
      },
      {
          "id": 116,
          "name": "Acıbadem Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2007",
          "type": "Vakıf",
          "web_page": "acibadem.edu.tr"
      },
      {
          "id": 117,
          "name": "Akev Üniversitesi",
          "city": "Antalya",
          "founded_at": "2014",
          "type": "Vakıf",
          "web_page": "akev.edu.tr"
      },
      {
          "id": 118,
          "name": "Alanya Hamdullah Emin Paşa Üniversitesi",
          "city": "Antalya",
          "founded_at": "2011",
          "type": "Vakıf",
          "web_page": "ahap.edu.tr"
      },
      {
          "id": 119,
          "name": "Anka Teknoloji Üniversitesi",
          "city": "Ankara",
          "founded_at": "2013",
          "type": "Vakıf",
          "web_page": "anka.edu.tr"
      },
      {
          "id": 120,
          "name": "Atılım Üniversitesi",
          "city": "Ankara",
          "founded_at": "1996",
          "type": "Vakıf",
          "web_page": "atilim.edu.tr"
      },
      {
          "id": 121,
          "name": "Avrasya Üniversitesi",
          "city": "Trabzon",
          "founded_at": "2010",
          "type": "Vakıf",
          "web_page": "avrasya.edu.tr"
      },
      {
          "id": 122,
          "name": "Bahçeşehir Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1998",
          "type": "Vakıf",
          "web_page": "bahcesehir.edu.tr"
      },
      {
          "id": 123,
          "name": "Başkent Üniversitesi",
          "city": "Ankara",
          "founded_at": "1994",
          "type": "Vakıf",
          "web_page": "baskent.edu.tr"
      },
      {
          "id": 124,
          "name": "Beykent Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "beykent.edu.tr"
      },
      {
          "id": 125,
          "name": "Beykoz Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2016",
          "type": "Vakıf",
          "web_page": "beykoz.edu.tr"
      },
      {
          "id": 126,
          "name": "Bezmiâlem Vakıf Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2010",
          "type": "Vakıf",
          "web_page": "bezmialem.edu.tr"
      },
      {
          "id": 127,
          "name": "Bilkent Üniversitesi",
          "city": "Ankara",
          "founded_at": "1984",
          "type": "Vakıf",
          "web_page": "bilkent.edu.tr"
      },
      {
          "id": 128,
          "name": "Biruni Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2014",
          "type": "Vakıf",
          "web_page": "biruni.edu.tr"
      },
      {
          "id": 129,
          "name": "Çankaya Üniversitesi",
          "city": "Ankara",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "cankaya.edu.tr"
      },
      {
          "id": 130,
          "name": "Çağ Üniversitesi",
          "city": "Mersin",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "cag.edu.tr"
      },
      {
          "id": 131,
          "name": "Doğuş Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "dogus.edu.tr"
      },
      {
          "id": 132,
          "name": "Fatih Sultan Mehmet Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2010",
          "type": "Vakıf",
          "web_page": "fatihsultan.edu.tr"
      },
      {
          "id": 133,
          "name": "Fenerbahçe Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2016",
          "type": "Vakıf",
          "web_page": ""
      },
      {
          "id": 134,
          "name": "Gedik Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2011",
          "type": "Vakıf",
          "web_page": "gedik.edu.tr"
      },
      {
          "id": 135,
          "name": "Haliç Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1998",
          "type": "Vakıf",
          "web_page": "halic.edu.tr"
      },
      {
          "id": 136,
          "name": "Hasan Kalyoncu Üniversitesi",
          "city": "Gaziantep",
          "founded_at": "2008",
          "type": "Vakıf",
          "web_page": "hku.edu.tr"
      },
      {
          "id": 137,
          "name": "Işık Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1996",
          "type": "Vakıf",
          "web_page": "isikun.edu.tr"
      },
      {
          "id": 138,
          "name": "İbn-u Haldun Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2015",
          "type": "Vakıf",
          "web_page": ""
      },
      {
          "id": 139,
          "name": "İstanbul 29 Mayıs Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2010",
          "type": "Vakıf",
          "web_page": "29mayis.edu.tr"
      },
      {
          "id": 140,
          "name": "İstanbul Arel Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2007",
          "type": "Vakıf",
          "web_page": "arel.edu.tr"
      },
      {
          "id": 141,
          "name": "İstanbul Aydın Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2003",
          "type": "Vakıf",
          "web_page": "aydin.edu.tr"
      },
      {
          "id": 142,
          "name": "İstanbul Bilgi Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1994",
          "type": "Vakıf",
          "web_page": "bilgi.edu.tr"
      },
      {
          "id": 143,
          "name": "İstanbul Bilim Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2006",
          "type": "Vakıf",
          "web_page": "istanbulbilim.edu.tr"
      },
      {
          "id": 144,
          "name": "İstanbul Esenyurt Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2013",
          "type": "Vakıf",
          "web_page": "esenyurt.edu.tr"
      },
      {
          "id": 145,
          "name": "İstanbul Gelişim Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2008",
          "type": "Vakıf",
          "web_page": "gelisim.edu.tr"
      },
      {
          "id": 146,
          "name": "İstanbul Kemerburgaz Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2011",
          "type": "Vakıf",
          "web_page": "kemerburgaz.edu.tr"
      },
      {
          "id": 147,
          "name": "İstanbul Kent Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2016",
          "type": "Vakıf",
          "web_page": "[]"
      },
      {
          "id": 148,
          "name": "İstanbul Kültür Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "iku.edu.tr"
      },
      {
          "id": 149,
          "name": "İstanbul Medipol Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2009",
          "type": "Vakıf",
          "web_page": "medipol.edu.tr"
      },
      {
          "id": 150,
          "name": "İstanbul Rumeli Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2015",
          "type": "Vakıf",
          "web_page": "rumeli.edu.tr"
      },
      {
          "id": 151,
          "name": "İstanbul Sabahattin Zaim Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2010",
          "type": "Vakıf",
          "web_page": "iszu.edu.tr"
      },
      {
          "id": 152,
          "name": "İstanbul Şehir Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2008",
          "type": "Vakıf",
          "web_page": "sehir.edu.tr"
      },
      {
          "id": 153,
          "name": "İstanbul Ticaret Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2001",
          "type": "Vakıf",
          "web_page": "iticu.edu.tr"
      },
      {
          "id": 154,
          "name": "İstinye Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2015",
          "type": "Vakıf",
          "web_page": "istinye.edu.tr"
      },
      {
          "id": 155,
          "name": "İzmir Ekonomi Üniversitesi",
          "city": "İzmir",
          "founded_at": "2001",
          "type": "Vakıf",
          "web_page": "ieu.edu.tr"
      },
      {
          "id": 156,
          "name": "Kadir Has Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "khas.edu.tr"
      },
      {
          "id": 157,
          "name": "Karatay Üniversitesi",
          "city": "Konya",
          "founded_at": "2010",
          "type": "Vakıf",
          "web_page": "karatay.edu.tr"
      },
      {
          "id": 158,
          "name": "Koç Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1992",
          "type": "Vakıf",
          "web_page": "ku.edu.tr"
      },
      {
          "id": 159,
          "name": "Konya Gıda Tarım Üniversitesi",
          "city": "Konya",
          "founded_at": "2013",
          "type": "Vakıf",
          "web_page": "gidatarim.edu.tr"
      },
      {
          "id": 160,
          "name": "Maltepe Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1997",
          "type": "Vakıf",
          "web_page": "maltepe.edu.tr"
      },
      {
          "id": 161,
          "name": "MEF Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2012",
          "type": "Vakıf",
          "web_page": "mef.edu.tr"
      },
      {
          "id": 162,
          "name": "Nişantaşı Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2012",
          "type": "Vakıf",
          "web_page": "nisantasi.edu.tr"
      },
      {
          "id": 163,
          "name": "Nuh Naci Yazgan Üniversitesi",
          "city": "Kayseri",
          "founded_at": "2009",
          "type": "Vakıf",
          "web_page": "nny.edu.tr"
      },
      {
          "id": 164,
          "name": "Okan Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1999",
          "type": "Vakıf",
          "web_page": "okan.edu.tr"
      },
      {
          "id": 165,
          "name": "Özyeğin Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2007",
          "type": "Vakıf",
          "web_page": "ozyegin.edu.tr"
      },
      {
          "id": 166,
          "name": "Piri Reis Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2008",
          "type": "Vakıf",
          "web_page": "pirireis.edu.tr"
      },
      {
          "id": 167,
          "name": "Sabancı Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1994",
          "type": "Vakıf",
          "web_page": "sabanciuniv.edu.tr"
      },
      {
          "id": 168,
          "name": "Sanko Üniversitesi",
          "city": "Gaziantep",
          "founded_at": "2013",
          "type": "Vakıf",
          "web_page": "sanko.edu.tr"
      },
      {
          "id": 169,
          "name": "TED Üniversitesi",
          "city": "Ankara",
          "founded_at": "2009",
          "type": "Vakıf",
          "web_page": "tedu.edu.tr"
      },
      {
          "id": 170,
          "name": "TOBB Ekonomi ve Teknoloji Üniversitesi",
          "city": "Ankara",
          "founded_at": "2003",
          "type": "Vakıf",
          "web_page": "etu.edu.tr"
      },
      {
          "id": 171,
          "name": "Toros Üniversitesi",
          "city": "Mersin",
          "founded_at": "2009",
          "type": "Vakıf",
          "web_page": "toros.edu.tr"
      },
      {
          "id": 172,
          "name": "Türk Hava Kurumu Üniversitesi",
          "city": "Ankara",
          "founded_at": "2011",
          "type": "Vakıf",
          "web_page": "thk.edu.tr"
      },
      {
          "id": 173,
          "name": "Ufuk Üniversitesi",
          "city": "Ankara",
          "founded_at": "1999",
          "type": "Vakıf",
          "web_page": "ufuk.edu.tr"
      },
      {
          "id": 174,
          "name": "Uluslararası Antalya Üniversitesi",
          "city": "Antalya",
          "founded_at": "2012",
          "type": "Vakıf",
          "web_page": "antalya.edu.tr"
      },
      {
          "id": 175,
          "name": "Üsküdar Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2011",
          "type": "Vakıf",
          "web_page": "uskudar.edu.tr"
      },
      {
          "id": 176,
          "name": "Yaşar Üniversitesi",
          "city": "İzmir",
          "founded_at": "2001",
          "type": "Vakıf",
          "web_page": "yasar.edu.tr"
      },
      {
          "id": 177,
          "name": "Yeditepe Üniversitesi",
          "city": "İstanbul",
          "founded_at": "1996",
          "type": "Vakıf",
          "web_page": "yeditepe.edu.tr"
      },
      {
          "id": 178,
          "name": "Yeni Yüzyıl Üniversitesi",
          "city": "İstanbul",
          "founded_at": "2009",
          "type": "Vakıf",
          "web_page": "yeniyuzyil.edu.tr"
      },
      {
          "id": 179,
          "name": "Yüksek İhtisas Üniversitesi",
          "city": "Ankara",
          "founded_at": "2013",
          "type": "Vakıf",
          "web_page": "yuksekihtisasuniversitesi.edu.tr"
      }
  ]
  }
    render() {
        return (
            
            <Container>
            <Row>
              <Col>
                  <Header/>
              </Col>
            </Row>
           
            <Row>
              <Col xs="12" className="mt-5">
                    <p style={{fontFamily:"Roboto,Regular",fontSize:"20px",color:"#000000"}}><strong>Üniversite Listesi</strong></p>
                </Col>
            </Row>

                <br></br>

                <Row>
    <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ÜNİVERSİTE ADI</th>
            <th>DETAY</th>
          </tr>
        </thead>
        <tbody>
          {this.state.universities.map((university) => (
            <tr>
              <th scope="row">{university.id}</th>
              <td>{university.name}</td>
              <td><Link to={`/universities/${ university.id }`}>Tıklayın</Link></td>
           
          </tr>
          ))}
          
        
        </tbody>
    </Table>
</Row>
           
          </Container>
        )
    }
}
