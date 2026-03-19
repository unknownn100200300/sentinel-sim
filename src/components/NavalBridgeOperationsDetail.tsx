import navalBridgeImg from "@/assets/Naval Bridge.jpg";
import radarArpaImg from "@/assets/Radar2.jpg";
import ecdisImg from "@/assets/Ecdis3 copy.jpg";
import gmdssImg from "@/assets/Gmdss-Communiation.jpg";

const NavalBridgeOperationsDetail = () => (
  <div className="mx-auto max-w-7xl">
    <section className="grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          The ARI vessel bridge simulator recreates the complete operational environment of a naval ship bridge.
          Integrated with advanced visualisation systems and motion platforms, the simulator delivers a fully immersive
          and realistic training experience.
        </p>
        <p>
          It enables officers to practice ship navigation, convoy coordination, and fleet operations management within a
          safe and controlled training environment.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60">
        <img src={navalBridgeImg} alt="Naval Bridge Simulator" className="h-[340px] w-full object-cover" />
      </div>
    </section>

    <section className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
      <div className="order-2 overflow-hidden rounded-xl border border-border/60 bg-card/60 md:order-1">
        <img src={radarArpaImg} alt="Radar ARPA Simulator" className="h-[340px] w-full object-contain p-4" />
      </div>

      <div className="order-1 space-y-4 md:order-2">
        <h3 className="heading-balance text-xl font-bold tracking-tight">Radar / ARPA Simulator</h3>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            The Radar and ARPA simulator complies with IMO performance standards for radar equipment used on seagoing
            vessels. It supports the training requirements defined in IMO Model Courses 1.07 and 1.08.
          </p>
          <p>
            The system enables realistic radar operation training and includes multiple radar types, including real OEM
            equipment and advanced radar emulation systems.
          </p>
        </div>
      </div>
    </section>

    <section className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <h3 className="heading-balance text-xl font-bold tracking-tight">ECDIS Simulator</h3>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            The ARI Electronic Chart Display and Information System (ECDIS) simulator is designed according to the
            latest STCW Manila Amendments and supports training requirements defined in IMO Model Course 1.27.
          </p>
          <p>
            It can operate as a standalone training system or integrate with additional navigation aids to simulate a
            fully functional bridge navigation environment.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60">
        <img src={ecdisImg} alt="ECDIS Simulator" className="h-[340px] w-full object-contain p-4" />
      </div>
    </section>

    <section className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60">
        <img src={gmdssImg} alt="GMDSS Simulator" className="h-[340px] w-full object-contain p-4" />
      </div>

      <div className="space-y-4">
        <h3 className="heading-balance text-xl font-bold tracking-tight">GMDSS & Communications Simulator</h3>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            The ARI communications simulator provides complete operational training for maritime communication systems
            used on modern ships.
          </p>
          <p>
            The simulator allows trainees to practice distress and routine communication procedures using satellite and
            terrestrial systems in a highly realistic operating environment.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default NavalBridgeOperationsDetail;
