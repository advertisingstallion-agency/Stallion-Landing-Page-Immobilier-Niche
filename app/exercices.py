#C- Année bissextile
Ï
try:
    annee = int(input("Une année : "))

    if annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0):
        print(annee, ": oui")
    else:
        print(annee, ": non")
except ValueError:
    print("Veuillez saisir une année entière.")