import './Regulations.css'

const Regulations = () =>
{
    return(
        <div className="regulations">
            <h1 id="h1">REGULAMIN SERWISU PLANSZUNIE.PL</h1>
            <h2 id="h2">Art. 1 Postanowienia ogólne</h2>
            <ol>
                <li>Niniejszy Regulamin określa zasady funkcjonowania oraz korzystania z serwisu pod nazwą „PLANSZUNIE.PL”, zdefiniowanego w dalszej części Regulaminu w szczególności prawa i obowiązki administratora Serwisu i jego Użytkowników związane ze świadczeniem Usług drogą elektroniczną.</li>
                <li>Regulamin udostępniany jest Użytkownikom przez Administratora przed zawarciem Umowy o świadczenie Usług.</li>
                <li>Użytkownik zobowiązany jest do przestrzegania postanowień Regulaminu od chwili jego akceptacji.</li>
                <li>Poprzez Serwis - tworzony, kontrolowany i obsługiwany przez Administratora - Użytkownikom oferowany jest dostęp do Usług zgodnie z Regulaminem lub ewentualnymi dodatkowymi warunkami.</li>
                <li>Podstawowym celem Serwisu jest udostępnienie w sieci Internet jak najpełniejszej bazy informacji o Grach Planszowych wraz z możliwością ich opiniowania i oceniania, a także nawiązywanie relacji z innymi Użytkownikami Zarejestrowanymi.</li>
                <li>Wszelkie działania Użytkowników w ramach Serwisu powinny być zgodne z przepisami obowiązującymi na terytorium Rzeczypospolitej Polskiej oraz dobrymi obyczajami. Zabronione jest wykorzystywanie Serwisu w sposób sprzeczny lub niewłaściwy z jego celem oraz z obowiązującymi przepisami prawa.</li>
                <li>Zabrania się w szczególności działalności Użytkowników polegającej na:
                    <ul>
                        <li>kopiowaniu części lub całości Serwisu, w tym w szczególności kodu źródłowego lub wykorzystywaniu go w celach zarobkowych</li>
                        <li>pobieraniu w sposób automatyczny i w jakimkolwiek celu jakichkolwiek elementów, Danych Użytkowników, Treści oraz Bazy Danych Serwisu, w tym w szczególności kopiowanie Danych Gier Planszowych,</li>
                        <li>udostępnianiu danych dotyczących Konta Użytkownika jakiemukolwiek podmiotowi trzeciemu w celu realizacji działań związanych z tym Kontem lub przysługującymi mu w ramach Konta uprawnieniami, w tym eksportu i importu danych, kopiowania zawartości w jakiejkolwiek formie i w jakikolwiek sposób, automatyzacji korespondencji itp.,</li>
                        <li>wielokrotnym publikowaniu w Serwisie tych samych lub zmodyfikowanych w niewielkim stopniu Treści lub Danych, w tym w szczególności Opinii</li>
                        <li>propagowaniu w jakikolwiek sposób i w jakiejkolwiek formie serwisów zamieszczających treści lub proponujących działania naruszające postanowienia Regulaminu, powszechnie obowiązujące przepisy prawa lub też zasady współżycia społecznego, w tym w szczególności serwisów oferujących treści, których rozpowszechnianie narusza prawa osób trzecich,</li>
                        <li>używaniu programów (botów) generujących zapytania do serwerów Administratora; wszelkie tego typu działania mogą zostać uznane za atak DoS (Denial of Service),</li>
                        <li>tworzeniu Konta lub Kont w celu manipulacji Oceną lub wizerunkiem Autora, Ilustratora, Wydawnictwa, Gry Planszowej lub wpływania na sposób świadczenia Usług przez Administratora; za takie działanie uznaje się w szczególności zakładanie przez jednego Użytkownika wielu Kont w tych celach,</li>
                        <li>zamieszczaniu w Serwisie bez zgody Administratora treści lub linków mających na celu promowanie w dowolnej formie innych stron/serwisów internetowych, aplikacji lub produktów i usług, w tym w szczególności mających charakter konkurencyjny w stosunku do działalności Administratora lub mogących negatywnie wpływać na prowadzoną przez Administratora działalność,</li>
                        <li>łamaniu ogólnie przyjętych zasad Netykiety,</li>
                        <li>podejmowaniu jakichkolwiek innych działań mogących destabilizować pracę Serwisu lub działających na jego szkodę, w tym działań mogących wpływać na dobre imię Serwisu.</li>
                    </ul>
                </li>
                <li>Zawarcie Umowy z Administratorem jest możliwe wyłącznie w języku polskim, zgodnie z Regulaminem.</li>
            </ol>
            <h2 id="h2">Art. 2 Definicje</h2>
            <p>Na potrzeby niniejszego Regulaminu, użyte poniżej określenia oznaczają:</p>
            <ol>
                <li>Administrator/Usługodawca — Planszunie.pl, Administrator świadczy na rzecz Użytkowników usługi drogą elektroniczną w tym w szczególności usługę udostępnienia zasobów i funkcjonalności Serwisu.</li>
                <li>Gra planszowa - jest to utwór intelektualny skatalogowany w Bazie Danych Serwisu.</li>
                <li>Autor - osoba, której jako twórcy przysługuje osobiste prawo autorskie do Gry Planszowej.</li>
                <li>Ilustrator - osoba, której jako twórcy przysługuje osobiste prawo autorskie do ilustracji zamieszczonych w Grze Planszowej.</li>
                <li>Konto użytkownika (Konto) – dostępne po zalogowaniu się (podaniu loginu oraz hasła), przypisane do Użytkownika miejsce w Serwisie, umożliwiające korzystanie z części usług Serwisu. Częścią Konta jest Profil Użytkownika.Baza danych Serwisu – baza danych w rozumieniu ustawy z dnia 27 lipca 2001 r. o ochronie baz danych, stanowiąca zbiór Danych Gier Planszowych, Danych Autora, Danych Ilustratora oraz Danych Wydawnictwa.</li>
                <li>Konto użytkownika (Konto) – dostępne po zalogowaniu się (podaniu loginu oraz hasła), przypisane do Użytkownika miejsce w Serwisie, umożliwiające korzystanie z części usług Serwisu. Częścią Konta jest Profil Użytkownika.</li>
                <li>Użytkownik — każda osoba fizyczna, osoba prawna albo jednostka organizacyjna nieposiadająca osobowości prawnej, która korzysta z Serwisu.</li>
                <li>Użytkownik Zarejestrowany – Użytkownik, który utworzył Konto w Serwisie w wyniku prawidłowo przeprowadzonej Rejestracji.</li>
                <li>Login — unikalna i niepowtarzalna nazwa Użytkownika w Serwisie wybrana w trakcie rejestracji Konta, w tym nickname i/lub adres e-mail Użytkownika.</li>
                <li>Hasło - ustalany przez Użytkownika podczas procesu Rejestracji ciąg znaków służący do późniejszej autoryzacji Użytkownika w Serwisie. Hasło musi składać się z od 6 do 30 znaków alfanumerycznych.</li>
                <li>Rejestracja - jednorazowa czynność dokonywana przez Użytkownika w Serwisie, polegająca na zdefiniowaniu Loginu i Hasła oraz założeniu przez Użytkownika Konta.</li>
                <li>Serwis - strona www, znajdująca się pod adresem domeny internetowej planszunie.pl wraz z podstronami, pod którymi Administrator prowadzi Serwis stanowiący platformę internetową będącą własnością Administratora; Serwis stanowi internetową bazę danych o Grach planszowych oraz pozwala Użytkownikom na korzystanie z Usług.</li>
                <li>Profil Użytkownika — podstrona w Serwisie zawierająca Dane Użytkownika oraz informacje o aktywnościach podejmowanych przez niego w Serwisie, które upublicznił.</li>
                <li></li>
                <li>Dane Użytkownika (Dane) – wszelkie informacje oraz Treści, w szczególności zdjęcia, obrazki, wiadomości tekstowe oraz Dane osobowe, które Użytkownik Zarejestrowany umieszcza w Serwisie w ramach Konta.</li>
                <li>Dane osobowe - informacje o osobie fizycznej zidentyfikowanej lub możliwej do zidentyfikowania poprzez jeden bądź kilka szczególnych czynników określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość, w tym IP urządzenia, dane o lokalizacji, identyfikator internetowy oraz informacje gromadzone za pośrednictwem plików cookie oraz innej podobnej technologii.</li>
                <li>Dane Gry Planszowej - wszelkie dane dotyczące Gry Planszowej umieszczone w Profilu Gry Planszowej, takie: autor, ilustratorzy, tytuł, wydawnictwo, okładka gry, notka o grze, ocena i inne dane o tym charakterze.</li>
                <li>Treści - wszelkie treści umieszczone w Serwisie przez Użytkownika, w tym Opinie, Oceny, zdjęcia oraz treści w innej formie.</li>
                <li>Regulamin — niniejszy Regulamin określający warunki korzystania z Serwisu.</li>
                <li>Serwis — internetowy portal Planszunie.pl, zlokalizowany pod adresem internetowym https://www.planszunie.pl lub w innych rozszerzeniach domenowych „planszunie” zarządzanych przez Administratora lub też w innych wybranych przez Administratora domenach, oferujący Użytkownikom i dostarczający im pakiet Usług świadczonych drogą elektroniczną dla niekomercyjnego użytku osobistego.</li>
                <li>Opinie - opinie o Grze planszowej odnoszące się do treści i formy opiniowanego przedmiotu, odczuć i wrażeń towarzyszących rozgrywce. Opinie mogą również dotyczyć aspektów technicznych takich jak druk, okładka, jakość wykonania, a także elementów estetycznych w tym komponentów i ilustracji; Opinią nie są wypowiedzi dotyczące Autora, bądź Ilustratora, które nie dotyczą jego twórczości. Opinią nie jest również link/odesłanie do treści w innym serwisie lub tekst/informacja w postaci leadu mającego na celu zachętę do przejścia do innego serwisu w celu zapoznania się ze zdaniem Użytkownika na temat opiniowanego dzieła.</li>
                <li>Oceny - wartość przypisana przez Użytkownika Zarejestrowanego do danej Gry planszowej na Stronie Gry planszowej za pośrednictwem udostępnionych funkcjonalności prezentowana w Serwisie w postaci liczbowej lub graficznej.</li>
                <li>Polityka Prywatności - dokument przyjęty przez Administratora, określający zasady przetwarzania Danych osobowych, prawa przysługujące osobom, których dane dotyczą, oraz sposób realizacji tych praw.</li>
                <li></li>
                <li>Prawa do Serwisu — wszelkie prawa własności intelektualnej do marki, znaków towarowych, domeny, projektów, elementów graficznych, oprogramowania oraz wszelkich innych elementów Serwisu o charakterze twórczym.</li>
                <li>Umowa – umowa o świadczenie usług drogą elektroniczną zawarta pomiędzy Użytkownikiem a Administratorem, na warunkach określonych w Regulaminie.</li>
                <li>Usługi – świadczone w oparciu o Regulamin, w ramach Serwisu na rzecz Użytkowników, usługi stanowiące usługi elektroniczne w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (DZ.U.Nr 144 poz. 1204 z poz. zm.).</li>
                <li>Wydawnictwo - osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, ale której odrębna ustawa przyznaje zdolność prawną, która w ramach prowadzonej przez siebie działalności przygotowuje, opracowuje, a następnie wydaje gry planszowe.</li>
                <li>Znaki towarowe (Znaki) - wszelkie odnoszące się do Serwisu informacje zastrzeżone oraz wszystkie elementy Serwisu poddane ochronie na podstawie obowiązującego prawa.</li>
            </ol>
            <p>Wyrażenia lub zwroty niezdefiniowane w Regulaminie będą mieć znaczenie przypisywane im przez prawo, a przy braku takiej definicji powinny być rozumiane zgodnie ze znaczeniami obowiązującymi w branży teleinformatycznej lub prawniczej.</p>
            <h2 id="h2">Art. 3 Warunki techniczne korzystania z Serwisu</h2>
            <ol>
                <li>Warunkiem koniecznym dla korzystania z Serwisu jest posiadanie przez Użytkownika urządzenia pozwalającego na dostęp do sieci Internet, włącznie z programem służącym do przeglądania jej zasobów, akceptującym pliki typu cookies oraz konta poczty e-mail. Dla poprawnego funkcjonowania Serwisu wymagana jest jedna z przeglądarek: Firefox, Opera, Chrome i Safari dla Mac OS X; w ich najnowszych wersjach. Starsze od aktualnych wersji wersje przeglądarek, mogą nie być obsługiwane lub nie być obsługiwane w pełni.</li>
                <li>W przypadku korzystania przez Użytkownika z nietypowych lub nie stosowanych powszechnie rozwiązań technicznych lub informatycznych Serwis może nie być dostępny.</li>
                <li>Administrator zobowiązuje się do rozpoczęcia świadczenia Usług wybranych przez Użytkownika niezwłocznie, a Usług wybranych przez Użytkownika Zarejestrowanego nie później niż 24 godziny od momentu utworzenia aktywnego Konta.</li>
            </ol>
            <h2 id="h2">Art. 4 Zawarcie umowy, rejestracja i korzystanie z Serwisu</h2>
            <ol>
                <li>Usługi świadczone na rzecz wszystkich Użytkowników:
                    <ul>
                        <li>możliwość przeglądania zasobów Serwisu,</li>
                        <li>możliwość korzystania z wyszukiwarki.</li>
                    </ul>
                </li>
                <li>Z chwilą skorzystania z Usług, które nie wymagają dokonywania rejestracji pomiędzy Użytkownikiem a Administratorem zostaje zawarta Umowa o świadczenie Usług drogą elektroniczną. W takim przypadku, korzystając z Usług Użytkownik oświadcza, że akceptuje Regulamin, tzn. zapoznał się z jego treścią i zobowiązuje się go przestrzegać.</li>
                <li>
                    Utworzenie indywidualnego Konta Użytkownika jest konieczne do korzystania z niektórych funkcjonalności Serwisu takich jak m.in.:
                    <ul>
                        <li>tworzenie Profili Gier Planszowych poprzez dodawanie Danych Gier Planszowych,</li>
                        <li>dodawanie Ocen i Opinii,</li>
                        <li>tworzenie i zarządzanie listami gier planszowych,</li>
                        <li>interakcja z innymi Użytkownikami Zarejestrowanymi poprzez dodawanie znajomych.</li>
                        </ul>
                        </li>
                    <li>Utworzenie oraz korzystanie z Konta jest dobrowolne oraz bezpłatne.</li>
                    <li>Rejestracja Konta w Serwisie odbywa się poprzez podanie w formularzu rejestracyjnym następujących Danych Użytkownika: Loginu, Hasła oraz adresu e-mail, a także akceptacji niniejszego Regulaminu oraz Polityki Prywatności. Rejestracja Użytkownika w Serwisie dokonuje się z momentem potwierdzenia dokonania Rejestracji. Podany przez Użytkownika adres e-mail nie może pochodzić z niezaufanej domeny.</li>
                    <li>Zatwierdzenie formularza rejestracyjnego wypełnionego przez Użytkownika jest równoznaczne ze złożeniem przez Użytkownika oświadczenia, iż podane przez Użytkownika Dane są prawdziwe, oraz że Użytkownik jest uprawniony do dysponowania tymi Danymi. Użytkownik ponosi odpowiedzialność za podanie Danych niezgodnych z rzeczywistością, nieprawdziwych lub dotyczących osób trzecich, a nie Użytkownika, bez wiedzy i akceptacji tych osób.</li>
                    <li>Zatwierdzenie formularza rejestracyjnego wypełnionego przez Użytkownika jest równoznaczne ze złożeniem przez Użytkownika oświadczenia, iż podane przez Użytkownika Dane są prawdziwe, oraz że Użytkownik jest uprawniony do dysponowania tymi Danymi. Użytkownik ponosi odpowiedzialność za podanie Danych niezgodnych z rzeczywistością, nieprawdziwych lub dotyczących osób trzecich, a nie Użytkownika, bez wiedzy i akceptacji tych osób.</li>
                    <li>Użytkownik dokonując Rejestracji oświadcza również, iż:
                        <ul>
                            <li>jest pełnoletni oraz nie został ubezwłasnowolniony w jakimkolwiek zakresie, bądź ma ukończone 13 lat i posiada zgodę swojego przedstawiciela ustawowego na dokonywanie ważnych czynności prawnych przy wykorzystaniu Serwisu,</li>
                            <li>bierze na siebie odpowiedzialność za utrzymanie w tajemnicy Danych dotyczących jego Konta, w tym w szczególności Hasła; Użytkownik ponosi całkowitą odpowiedzialność za skutki udostępnienia osobom trzecim swojego Hasła,</li>
                            <li>bierze, w maksymalnym zakresie dozwolonym prawem, na siebie odpowiedzialność za wszystkie czynności wykonywane w ramach bądź przy wykorzystaniu jego Konta, w tym za dostarczone Treści oraz ich modyfikację.</li>
                        </ul>
                    </li>
                    <li>Zabrania się korzystania z Kont innych Użytkowników Zarejestrowanych.</li>
                </ol>
                <h2 id="h2">Art. 5 Baza danych serwisu</h2>
                <ol>
                    <li>Administrator jest producentem Bazy Danych Serwisu w rozumieniu ustawy o bazach danych zawierającej zbiór Danych Gier Planszowych.</li>
                    <li>Wszelkie informacje stanowiące Dane Gier Planszowych, które zamieszczane są w Serwisie przez Użytkowników, stanowią część Bazy Danych Serwisu.</li>
                    <li>Informacje stanowiące Bazę Danych Serwisu mogą być moderowane przez Administratora, co oznacza, iż Administrator może odmówić opublikowania ich w Serwisie lub zmienić ich treść, w szczególności jeżeli informacje te będą niedozwolone ze względu na polskie lub międzynarodowe przepisy prawa, treść niniejszego Regulaminu lub dobre obyczaje, a także gdy naruszają moralność publiczną lub są niezgodne z rzeczywistościąWszelkie informacje stanowiące Dane Gier Planszowych, które zamieszczane są w Serwisie przez Użytkowników, stanowią część Bazy Danych Serwisu.</li>
                    <li>Administratorowi jako producentowi Bazy Danych Serwisu przysługuje wyłączne prawo pobierania danych i wtórnego ich wykorzystania w całości lub w istotnej części, co do jakości lub ilości. Użytkownik może korzystać z informacji, które zamieścił w Bazie Danych Serwisu wyłącznie na zasadach określonych w ustawie o bazach danych.</li>
                </ol>
                <h2 id="h2">Art. 6 Ochrona danych osobowych</h2>
                <ol>
                    <li>Z chwilą rejestracji Użytkownik wyraża zgodę na umieszczenie i przetwarzanie jego danych osobowych przez Administratora, zgodnie z warunkami, w sposób i w celach określonych w Polityce Prywatności oraz zgodnie z postanowieniami Regulaminu.</li>
                    <li>Usługodawca przywiązuje szczególną wagę do poszanowania prywatności Użytkowników.</li>
                    <li>Usługodawca jest administratorem Danych osobowych Użytkowników niezbędnych do dokonania Rejestracji w Serwisie oraz danych wygenerowanych w związku z korzystaniem z Serwisu.</li>
                    <li>Zasady przetwarzania Danych osobowych przez Usługodawcę, katalog praw przysługujących osobom, których dane dotyczą, oraz sposób wykonywania praw przysługujących w związku z przetwarzaniem danych osobowych określa Polityka prywatności.</li>
                    <li>Administrator nie będzie udostępniać zgromadzonych danych osobowych Użytkowników Zarejestrowanych innym osobom lub instytucjom, chyba że nastąpi to za wyraźną zgodą lub na życzenie Użytkownika. Administrator uprawniony jest do ujawnienia i udostępnienia danych osobowych wyłącznie podmiotom upoważnionym na podstawie właściwych przepisów prawa, zgodnie z postanowieniami Regulaminu i obowiązującymi przepisami prawa.</li>
                </ol>
                <h2 id="h2">Art. 7 Zmiana Regulaminu</h2>
                <ol>
                    <li>Regulamin, w tym polityki oraz warunki, o których mowa w tym Regulaminie, stanowią całość Umowy i regulują korzystanie przez Użytkownika z Serwisu, zastępując wszelkie wcześniejsze umowy pomiędzy Użytkownikiem i Administratorem.</li>
                    <li>
                        Usługodawca uprawniony jest do dokonania zmiany postanowień Regulaminu w każdym momencie w przypadku wystąpienia któregokolwiek z następujących ważnych powodów:
                    <ul>
                        <li>konieczności dostosowania Regulaminu do przepisów prawa, zaleceń, wytycznych, nakazów lub zakazów, orzeczeń, postanowień, interpretacji lub decyzji uprawnionych władz publicznych,</li>
                        <li>zmiany zakresu usług świadczonych przez Usługodawcę,</li>
                        <li>zmiany funkcjonalności Konta,</li>
                        <li>zmiany zakresu lub charakteru działalności Usługodawcy,</li>
                        <li>zmiany warunków technicznych korzystania z usług świadczonych przez Usługodawcę,</li>
                        <li>konieczności dostosowania Regulaminu do najlepszych praktyk związanych ze świadczeniem usług przez Usługodawcę, w tym najlepszych praktyk w zakresie ochrony praw Użytkowników,</li>
                        <li>konieczności skorygowania sformułowań niejasnych lub budzących wątpliwości lub poprawy oczywistych omyłek pisarskich, które ewentualnie wystąpiłby w Regulaminie,</li>
                        <li>pojawienia się nowych ryzyk lub zagrożeń związanych z korzystaniem z usług świadczonych przez Usługodawcę, zmiany lub odpadnięcia (zniwelowania) takich ryzyk lub zagrożeń,</li>
                        <li>zmiany danych Usługodawcy, w tym adresów URL (odnośników/hiperlinków) zamieszczonych w Regulaminie.</li>
                        <li>O dokonanej zmianie Regulaminu Usługodawca poinformuje Użytkownika za pośrednictwem wiadomości e-mail przesłanej na adres poczty elektronicznej powiązany z Kontem lub w drodze korespondencji wewnętrznej kierowanej do Użytkownika bezpośrednio na Konto w Serwisie, na 14 dni przed ich wejściem w życie. Zmiany zostaną również opublikowane w postaci tekstu jednolitego wraz z informacją o ich dokonaniu w Serwisie.</li>
                        <li>Użytkownik może nie zaakceptować zmian Regulaminu poprzez usunięcie zawiadomienie Usługodawcy o braku akceptacji postanowień Regulaminu lub Polityki Prywatności w celu usunięcia Konta Użytkownika przez Usługodawcę. W przypadku, gdy Konto nie zostanie usunięte przyjmuje się, że Użytkownik zaakceptował zmiany.</li>
                    </ul>
                    </li>
                </ol>
                <h2 id="h2">Art. 8 Wypowiedzenie Umowy przez Administratora</h2>
                <ol>
                    <li>
                        W przypadku rażącego naruszenia zasad korzystania z Serwisu określonych w niniejszym Regulaminie lub powszechnie obowiązujących przepisów prawa Administrator może usunąć Konto, wypowiadając Umowę ze skutkiem natychmiastowym. Za rażące naruszenie należy uznać w szczególności sytuacje gdy:
                        <ul>
                            <li>Użytkownik Zarejestrowany zamieszcza niedozwolone treści,</li>
                            <li>Użytkownik Zarejestrowany udostępnia przynależące mu Konto Użytkownika do używania osobom trzecim bez pisemnej, w tym elektronicznej, zgody Administratora,</li>
                            <li>Użytkownik w inny sposób narusza Regulamin Serwisu i nie reaguje na ostrzeżenia Administratora lub wezwania do zaprzestania naruszeń,</li>
                            <li>Usunięcie Konta Użytkownika przez Administratora w przypadkach określonych w Regulaminie jest potwierdzane przez Administratora poprzez przesłanie odpowiedniej informacji na adres poczty elektronicznej (e-mail) Użytkownika Zarejestrowanego, aktywny w chwili usunięcia Konta,</li>
                            <li>Po usunięciu Konta przez Administratora, Administrator może korzystać z zamieszczonych w Serwisie przez Użytkownika Treści na zasadach określonych w niniejszym Regulaminie.</li>
                        </ul>
                    </li>
                </ol>
                <h2 id="h2">Art. 9 Postępowanie reklamacyjne i odstąpienie od umowy konsumenckiej</h2>
                <ol>
                    <li>Użytkownicy mogą składać reklamacje dotyczące spraw związanych z funkcjonowaniem Serwisu. Reklamacje mogą być składane w formie pisemnej na adres Administratora lub drogą elektroniczną za pomocą wiadomości przesłanej na adres poczty elektronicznej (e-mail) Administratora: admin@planszunie.pl.</li>
                    <li>
                        Reklamacja powinna zawierać następujące informacje:
                        <ul>
                            <li>dane konta Użytkownika Zarejestrowanego, takie jak login;</li>
                            <li>określenie przedmiotu reklamacji i reklamowanego okresu;</li>
                            <li>przedstawienie okoliczności uzasadniających reklamację;</li>
                        </ul>
                    </li>
                    <li>Użytkownikowi przysługuje prawo usunięcia konta za pomocą wniosku wysyłanego na adres poczty elektronicznej Administratora.</li>
                    <li>Administrator udziela odpowiedzi na reklamację drogą elektroniczną w terminie 14 (czternastu) dni od dnia jej złożenia, chyba że reklamacja została w całości zrealizowana (np. zgłoszony przez Użytkownika błąd w Serwisie został już naprawiony przez Administratora). Odpowiedź na reklamację wysyłana będzie na adres e-mail Użytkownika przypisany do Konta lub na adres wskazany w reklamacji składanej na piśmie. Administrator zastrzega sobie prawo do wydłużenia powyższego terminu maksymalnie do 30 dni w przypadku, gdy rozpoznanie reklamacji wymaga wiadomości specjalnych lub napotka przeszkody z przyczyn niezależnych od Administratora (takie jak awarie sprzętu lub sieci internetowej). Administrator ponadto zastrzega, że rozpatrzenie reklamacji może wymagać uzyskania od Użytkownika dodatkowych wyjaśnień – czas udzielania wyjaśnień przez Użytkownika każdorazowo przedłuża okres rozpoznania reklamacji.</li>
                </ol>
                <h2 id="h2">Art. 10 Wyłączenie odpowiedzialności Administratora</h2>
                <ol>
                    <li>Administrator zobowiązuje się do dołożenia wszelkich starań celem zapewnienia działania Serwisu bez jakichkolwiek zakłóceń, jednakże Administrator nie ponosi odpowiedzialności za zakłócenia spowodowane siłą wyższą lub niedozwoloną ingerencją Użytkowników, Użytkowników Zarejestrowanych lub osób trzecich.</li>
                    <li>Administrator nie ponosi odpowiedzialności za sposób korzystania przez Użytkownika lub Użytkownika Zarejestrowanego z Serwisu i skutki korzystania z Serwisu, jeżeli korzystanie nastąpiło w sposób sprzeczny z postanowieniami niniejszego Regulaminu.</li>
                    <li>Administrator zastrzega, iż zakres Usług może być zmieniany przez Administratora, w szczególności w ważnych powodów biznesowych lub prawnych. Administrator będzie informował za pośrednictwem wiadomości wysyłanych na adres e-mail podany przez Użytkownika w momencie rejestracji o każdej zmianie zakresu udostępnianych funkcji z odpowiednim wyprzedzeniem.</li>
                    <li>W Serwisie mogą znajdować się aktywne linki, umożliwiające Użytkownikowi lub Użytkownikowi Zarejestrowanemu dotarcie do stron internetowych innych niż Serwis; w przypadku stron internetowych innych podmiotów niż Administratora, Administrator zastrzega, iż nie ma on wpływu na zawarte na tych stronach treści ani tych treści nie weryfikuje oraz nie ma wpływu na prowadzoną przez administratorów tych stron politykę prywatności oraz zaleca zapoznanie się ze wszelkimi regulaminami i innymi dokumentami dotyczącymi polityki prywatności oraz oferowanych na tych stronach produktów lub usług.</li>
                </ol>
                <h2 id="h2">Art. 11 Postanowienia końcowe</h2>
                <ol>
                    <li>Użytkownicy i Użytkownicy Zarejestrowani zgadzają się, że Umowa może zostać scedowana przez Administratora, w całości lub w części, na rzecz osoby trzecie. Użytkownicy Zarejestrowani nie mogą scedować Umowy na rzecz jakichkolwiek podmiotów z uwagi na charakter Konta Użytkownika.</li>
                    <li>Niniejszy dokument jak również dokumenty w nim powołane podlegają przepisom polskiego prawa, w tym w szczególności przepisom: ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny, ustawy z dnia 27 lipca 2001 r. o ochronie baz danych, ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną oraz ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych.</li>
                    <li>Wszelkie spory, które mogą wyniknąć w związku z niniejszym dokumentem będą rozwiązywane w drodze negocjacji pomiędzy Stronami, którzy zobowiązują się działać w dobrej wierze. W przypadku, gdy procedura przewidziana w zdaniu powyżej okaże się nieskuteczna, spór Administratorem a Użytkownikiem niebędącym konsumentem będzie przedstawiony do rozpoznania przez właściwe sądy powszechne z siedzibą w Zielonej Górze.</li>
                    <li>Niniejszy Regulamin wchodzi w życie z dniem 08.04.2022 r.</li>
                </ol>
        </div>
    )
}
export default Regulations