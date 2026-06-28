# Zadanie rekrutacyjne — SoCap Onboarding Call Landing Page

**Live:** https://socap-landing-page.vercel.app/

---

## Narzędzia AI, których użyłem

- **v0 (Vercel)** — tutaj zaczął się projekt. Opisałem co chcę zbudować, dla kogo i w jakim stylu — v0 wygenerował gotową stronę z wszystkimi sekcjami. Zamiast zaczynać od zera, dostałem działający punkt wyjścia w kilkanaście minut.
- **Claude (Anthropic)** — główny współpracownik przy iteracjach. Poprawki copy, łączenie sekcji w jeden spójny blok, podpinanie płatności, drobne korekty wizualne. Traktowałem go jak junior developera któremu tłumaczę co chcę osiągnąć, nie jak narzędzie do wklejania kodu.
- **ChatGPT** — brainstorming i weryfikacja komunikatów. Sprawdzałem czy copy trafia do osoby która zarządza firmą 50–300 osób i szuka sposobu na obniżenie kosztów — nie do kogoś kto rozumie technologię.

Strona postawiona na **v0 + Vercel**, bramka płatnicza **Stripe** w trybie testowym.

---

## 2–3 prompty, które najbardziej zaważyły na wyniku

**1. Prompt startowy do v0:**
> "Zbuduj landing page dla produktu SoCap Bonus — 60-minutowy call za 1 zł. Persona: prezes / CFO firmy 50–300 osób. Sekcje: hero z CTA, liczby, opinie, jak to działa, FAQ, końcowe CTA. Styl minimalistyczny, dużo białej przestrzeni, kolor akcentu #2f9e44. Integracja z płatnością Stripe."

To był prompt który dał 80% gotowego produktu w jednym podejściu.

**2. Prompt do Claude — łączenie sekcji:**
> "Mam dwa oddzielne bloki: jak to działa (3 kroki) i dokumenty prawne (wyrok sądu, kontrola PIP, rejestr ministerialny). Połącz je w jeden blok z dividerem 'Podstawy prawne' w środku."

Strona zyskała logiczny flow — najpierw proces, potem dowody. Wcześniej te dwa bloki wisiały obok siebie bez związku.

**3. Prompt do Claude — weryfikacja copy pod personę:**
> "Sprawdź czy tekst na górze strony trafia do CFO / prezesa firmy produkcyjnej. Ma być konkretnie — kwoty, procenty — bez ogólnych haseł marketingowych."

Claude zasugerował że "50+ osób" brzmi bardziej selektywnie niż "10+". Zdecydowałem się na 10+ żeby nie odcinać mniejszych firm.

---

## Gdzie AI dało wartość, a gdzie musiałem poprawić ręcznie

**AI dało wartość:**
- Cały szkielet strony — to co zajęłoby kilka dni, wyszło w kilka godzin
- Integracja płatności — logika przekierowania, strona potwierdzenia — gotowe od razu
- Pierwsze wersje copy były naprawdę dobre, wymagały małych poprawek

**Poprawiałem ręcznie:**
- Logo w nawigacji — AI generowało placeholder, musiałem sam podpiąć zdjęcie z socapbonus.com
- Liczby w sekcji statystyk — zamieniłem generyczne cyfry na konkretne dane z prawdziwego serwisu (wyrok SA, kontrola PIP, numer rejestru ministerialnego)
- Ton copy — pierwsze wersje były za bardzo "reklamowe", przeszedłem przez nie ręcznie żeby brzmiały jak rozmowa z CFO, nie jak banner
- **Problem ze Stripe** — minimalna kwota transakcji to 2 zł, nie 1 zł jak zakładał brief. Zajęło mi chwilę żeby to zauważyć i przestawić na 2 zł. Na potrzeby testowej integracji nie ma to znaczenia biznesowego, ale warto wiedzieć na przyszłość przy konfiguracji bramki.

---

## Czas wykonania

Łącznie ok. **5–6 godzin**, w tym:
- ~1,5h — budowanie w v0, pierwsze uruchomienie na Vercel
- ~2h — iteracje z Claude (sekcje, copy, poprawki wizualne)
- ~1h — integracja Stripe i testy płatności
- ~0,5h — README i ostatnie przejrzenie

---

## Dlaczego ten stack

Wybrałem narzędzia które znam i które pozwoliły mi działać szybko — nie te które brzmią najlepiej na papierze.

**v0** to dla mnie naturalny punkt startowy przy takich zadaniach — opisujesz co chcesz, dostajesz działającą stronę, potem iterujesz. Nie trzeba być developerem żeby z tego korzystać efektywnie.

**Vercel** — deploy jednym kliknięciem, strona żywa od razu. Zero konfiguracji serwerów.

**Stripe** — wybrałem go bo działa od razu w trybie testowym, bez żadnych formalności czy weryfikacji konta. Dokumentacja jest prosta, a sam formularz płatności wygląda profesjonalnie bez dodatkowej pracy. PayU czy Przelewy24 wymagają więcej kroków żeby w ogóle zacząć testować — przy 4–8h na zadanie to miało znaczenie.
