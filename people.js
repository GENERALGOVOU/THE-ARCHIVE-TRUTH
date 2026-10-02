const PEOPLE = [
{
id: "fidel-castro",
name: "Fidel Castro",
role: "Target — assassination plots",
years: "1959–2000s",
status: "Proven plots — documented",
summary: "Cuban leader targeted by CIA assassination schemes after 1959 revolution.",
details: "Church Committee and 1967 Inspector General report document poison pills, exploding shells, and Mafia contacts via Rosselli and Trafficante. None succeeded. Plots stopped after exposure in the 1970s, though embargo and covert pressure continued.",
sources: "CIA IG assassination report (1967); Church Committee"
},
{
id: "mossadegh",
name: "Mohammad Mossadegh",
role: "Target — regime change",
years: "1951–1953",
status: "Proven — acknowledged",
summary: "Iranian PM overthrown after nationalizing oil.",
details: "CIA Wilber history confirms US planning of propaganda, bribed crowds and military coordination with MI6 networks. Arrested 1953, under house arrest until death 1967.",
sources: "CIA Wilber history (2013)"
},
{
id: "arbenz",
name: "Jacobo Arbenz",
role: "Target — regime change",
years: "1951–1954",
status: "Proven — declassified",
summary: "Guatemalan president toppled by PBSUCCESS.",
details: "Land reform and UFCO dispute framed as communist threat. CIA radio, air intimidation and Castillo Armas force forced resignation. Exile and death 1971.",
sources: "CIA PBSUCCESS history"
},
{
id: "allende",
name: "Salvador Allende",
role: "Target — destabilization",
years: "1970–1973",
status: "Proven — declassified",
summary: "Chilean president undermined by FUBELT before 1973 coup.",
details: "US funded opposition, strikes and propaganda. Track II involved weapons contacts linked to Schneider killing. Died in La Moneda during Pinochet coup. US denies direct coup role but destabilization is documented.",
sources: "Hinchey Report; Chile Declassification Project"
},
{
id: "lumumba",
name: "Patrice Lumumba",
role: "Target — assassination planning",
years: "1960–1961",
status: "Proven planning — execution by others",
summary: "Congolese PM; CIA plotted poisoning, Belgians/Congolese executed him.",
details: "Church Committee found CIA poison plot authorized but not carried out before Lumumba was handed to Katanga and shot Jan 1961. Belgium apologized 2002 for role. US moral responsibility debated.",
sources: "Church Committee; Belgian inquiry"
},
{
id: "mlk",
name: "Martin Luther King Jr.",
role: "Target — surveillance / harassment",
years: "1960s",
status: "Proven — declassified",
summary: "FBI COINTELPRO and NSA MINARET watchlisted King.",
details: "FBI wiretaps, anonymous 1964 letter urging suicide, and efforts to discredit. No link to 1968 assassination by James Earl Ray found by investigations, but harassment is fully documented.",
sources: "Church Committee; FBI files"
},
{
id: "hampton",
name: "Fred Hampton",
role: "Target — COINTELPRO",
years: "1968–1969",
status: "Proven targeting — killing disputed",
summary: "Black Panther leader infiltrated by FBI, killed in Chicago police raid.",
details: "Informant floor plan used in 1969 raid that killed Hampton and Mark Clark. 1982 civil settlement $1.85M. Whether FBI ordered killing vs. informant + police action remains legally contested, but targeting is proven.",
sources: "Church Committee; civil trial records"
},
{
id: "dulles",
name: "Allen Dulles",
role: "Associated — CIA Director",
years: "1953–1961",
status: "Proven — historical",
summary: "Ran CIA during Ajax, PBSUCCESS, MKUltra authorization.",
details: "Oversaw covert expansion. Fired by Kennedy after Bay of Pigs. Central figure linking regime-change and mind-control programs.",
sources: "CIA histories; FRUS"
},
{
id: "gottlieb",
name: "Sidney Gottlieb",
role: "Associated — MKUltra chemist",
years: "1951–1973",
status: "Proven — historical",
summary: "Headed MKUltra, approved LSD, poison and mind-control tests.",
details: "Ordered destruction of MKUltra files 1973. Ran MKNAOMI toxin work. Later expressed remorse in interviews. Never prosecuted.",
sources: "Senate MKUltra hearings"
},
{
id: "cameron",
name: "Ewen Cameron",
role: "Associated — Allan Memorial",
years: "1957–1964",
status: "Proven — settled",
summary: "Psychiatrist whose depatterning experiments were CIA-funded via front.",
details: "Used massive electroshock, LSD, induced sleep. Patients left with amnesia. Canadian settlements 1990s-2000s; CIA settled 9 cases 1988.",
sources: "Canadian settlements; Senate hearings"
},
{
id: "snowden",
name: "Edward Snowden",
role: "Revealer — NSA contractor",
years: "2013–present",
status: "Proven leaks — asylum",
summary: "Exposed PRISM/Upstream and bulk collection, sparking reforms.",
details: "Leaked to Guardian/WaPo 2013. US charged under Espionage Act. Granted Russian asylum/citizenship. PCLOB and courts later found bulk telephony illegal.",
sources: "Snowden docs; PCLOB; 2nd Circuit 2015"
},
{
id: "assange",
name: "Julian Assange",
role: "Reported target — disputed plans",
years: "2010–2024",
status: "Reported — Yahoo 2021, US denies lethal intent",
summary: "WikiLeaks founder; 2021 report alleged 2017 CIA kidnap/kill discussions.",
details: "Yahoo cited 30 officials describing sketches after Vault 7 leak. CIA/NSC did not confirm. Pled guilty 2024 to one Espionage Act count, freed. Include as reported, not proven operation.",
sources: "Yahoo News investigation (2021); DOJ plea 2024"
},
{
id: "epstein",
name: "Jeffrey Epstein",
role: "Controversial — alleged intel ties (unproven)",
years: "2000s–2019",
status: "Crimes proven — intel ties unproven",
summary: "Financier convicted 2008, re-arrested 2019 for sex trafficking; died in custody. Intelligence-asset claims are unproven.",
details: "Documented: 2008 Florida plea, 2019 SDNY trafficking case, death ruled suicide. Alleged: Acosta 'belonged to intelligence' quote (denied/context disputed), Wexner/Mossad/CIA claims have no official evidence. List intel link as allegation only. Victim network and non-prosecution deal remain legitimate public-interest questions.",
sources: "DOJ indictments; BOP death report; court records"
},
{
id: "terry-davis",
name: "Terry Davis",
role: "Internet lore — NO documented CIA link",
years: "2000s–2018",
status: "No evidence — correction entry",
summary: "TempleOS creator. No credible evidence he was a CIA target or asset.",
details: "Davis, who had schizophrenia, posted about CIA/federal harassment. Included here to prevent misinformation: FBI/CIA files, court or press investigations show no targeting program. Notable as programmer and for mental-health history, not as covert-ops case. Do not cite as CIA victim without primary source.",
sources: "Interviews; obituaries; no declassified file names him"
}
];
