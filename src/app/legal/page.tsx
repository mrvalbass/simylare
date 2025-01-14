import { TEXT_PRIMARY } from "../constants/colors";

export default function Legal() {
  return (
    <main className="grow flex items-center justify-center">
      <div className={`m-5 w-[80%] ${TEXT_PRIMARY}`}>
        <h1 className="text-xl font-bold">Mentions légales</h1>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">1 – Édition du site</h2>
          <p>
            En vertu de l’article 6 de la loi n°2004-575 du 21 juin 2004 pour la
            confiance dans l’économie numérique, <br /> il est précisé aux
            utilisateurs du site internet{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://simylare.com"
              target="_blank"
            >
              https://simylare.com
            </a>{" "}
            l’identité des différents intervenants dans le cadre de sa
            réalisation et de son suivi :
          </p>
          <ul className="pl-5 list-disc">
            <li className="pl-2 mt-2">
              <strong>Propriétaire du site :</strong> ANDREOTTI Jimmy, SIMYLARE
              – SARL
              <br />
              Contact :{" "}
              <a
                className="underline cursor-pointer font-bold"
                href="mailto:jimmy.andreotti@simylare.com"
                target="_blank"
              >
                jimmy.andreotti@simylare.com
              </a>
              , 06 65 14 50 33
              <br />
              Adresse : 4 impasse de la source, 69300 CALUIRE-ET-CUIRE, FRANCE
            </li>
            <li className="pl-2 mt-2">
              <strong>Identification de l’entreprise :</strong>
              <br />
              SIMYLARE – SARL au capital social de 7500 €<br />
              SIRET : 980 172 340 00013
              <br />
              RCS : Lyon
              <br />
              Adresse postale : 4 impasse de la source, 69300 CALUIRE-ET-CUIRE,
              FRANCE
            </li>
            <li className="pl-2 mt-2">
              <strong>Directeur de la publication :</strong> ANDREOTTI Jimmy,
              SIMYLARE – SARL
              <br />
              Contact :{" "}
              <a
                className="underline cursor-pointer font-bold"
                href="mailto:jimmy.andreotti@simylare.com"
              >
                jimmy.andreotti@simylare.com
              </a>
            </li>
            <li className="pl-2 mt-2">
              <strong>Hébergeur :</strong>
              <br />
              IONOS SARL
              <br />
              Adresse : 7, place de la Gare, BP 70109, 57201 SARREGUEMINES
            </li>
            <li className="pl-2 mt-2">
              <strong>Délégué à la protection des données :</strong> ANDREOTTI
              Jimmy
              <br />
              Contact :{" "}
              <a
                className="underline cursor-pointer font-bold"
                href="mailto:jimmy.andreotti@simylare.com"
                target="_blank"
              >
                jimmy.andreotti@simylare.com
              </a>
            </li>
          </ul>
        </section>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">
            2 – Propriété intellectuelle et contrefaçons
          </h2>
          <p>
            ANDREOTTI Jimmy, SIMYLARE – SARL, est propriétaire des droits de
            propriété intellectuelle et détient les droits d’usage sur tous les
            éléments accessibles sur le site internet, notamment les textes,
            images, graphismes, logos, vidéos, architecture, icônes et sons.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable d’ANDREOTTI Jimmy, SIMYLARE – SARL.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque des
            éléments qu’il contient sera considérée comme constitutive d’une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </section>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">
            3 – Limitations de responsabilité
          </h2>
          <p>
            ANDREOTTI Jimmy, SIMYLARE – SARL, s’efforce de sécuriser au mieux le
            site{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://simylare.com"
              target="_blank"
            >
              https://simylare.com
            </a>
            .
            <br /> Cependant, sa responsabilité ne pourra être engagée en cas de
            dommages résultant de l’accès au site, de l’utilisation de son
            contenu ou d’intrusions malveillantes.
          </p>
          <p>
            Le site propose un formulaire de contact accessible aux
            utilisateurs. <br /> Tout contenu déposé dans ce formulaire doit
            respecter la législation applicable en France. <br /> ANDREOTTI
            Jimmy, SIMYLARE – SARL, se réserve le droit de supprimer tout
            contenu non conforme sans préavis.
          </p>
        </section>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">
            4 – CNIL et gestion des données personnelles
          </h2>
          <p>
            Conformément à la loi n°78-17 du 6 janvier 1978 modifiée et au RGPD,
            l’utilisateur du site{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://simylare.com"
              target="_blank"
            >
              https://simylare.com
            </a>{" "}
            dispose d’un droit d’accès, de modification et de suppression des
            informations collectées.
          </p>
          <p>
            Pour exercer ce droit, envoyez un e-mail à notre Délégué à la
            Protection des Données :{" "}
            <a
              className="underline cursor-pointer font-bold"
              href="mailto:jimmy.andreotti@simylare.com"
              target="_blank"
            >
              jimmy.andreotti@simylare.com
            </a>
            .
          </p>
          <p>
            Les informations sur le traitement des données (finalités, durée de
            conservation, droits des utilisateurs) sont détaillées dans notre
            Politique de confidentialité.
          </p>
        </section>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">
            5 – Liens hypertextes et cookies
          </h2>
          <p>
            Le site{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://simylare.com"
              target="_blank"
            >
              https://simylare.com
            </a>{" "}
            contient des liens hypertextes vers d’autres sites et dégage toute
            responsabilité concernant ces liens externes ou leur contenu.
          </p>
          <p>
            <strong>Cookies :</strong>
            <br />
            Le site utilise des cookies exclusivement à des fins statistiques et
            pour garantir son bon fonctionnement. Aucun cookie ne sera déposé
            sans le consentement explicite de l’utilisateur.
          </p>
          <p>
            Les cookies sont conservés pour une durée maximale de 6 mois. Vous
            pouvez les accepter ou les refuser en modifiant les paramètres de
            votre navigateur. Pour en savoir plus, consultez notre Politique de
            confidentialité.
          </p>
        </section>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">6 – Autres contributeurs</h2>
          <p>
            La conception et la réalisation technique du site{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://simylare.com"
              target="_blank"
            >
              https://simylare.com
            </a>{" "}
            ont été assurées par Valentin Guillot.
          </p>
          <p>
            Site personnel :{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://valentinguillot.fr"
              target="_blank"
            >
              https://valentinguillot.fr
            </a>
            <br />
            Contact :{" "}
            <a
              className="underline cursor-pointer font-bold"
              href="mailto:vvm.guillot@gmail.com"
              target="_blank"
            >
              vvm.guillot@gmail.com
            </a>
            , 07 70 18 62 65
          </p>
        </section>

        <section className="pl-5 mt-5">
          <h2 className="underline font-bold mb-3">
            7 – Droit applicable et attribution de juridiction
          </h2>
          <p>
            Tout litige en relation avec l’utilisation du site{" "}
            <a
              className="cursor-pointer underline font-bold"
              href="https://simylare.com"
              target="_blank"
            >
              https://simylare.com
            </a>{" "}
            est soumis au droit français. <br />
            En dehors des cas où la loi ne le permet pas, il est fait
            attribution exclusive de juridiction aux tribunaux compétents de
            Lyon.
          </p>
        </section>
      </div>
    </main>
  );
}
