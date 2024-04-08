window.onload = function() {
    let DN1 = ['star', 'monkey', 'super', 'unsc'];
    let DN2 = ['platinum', 'd', 'mario', 'spartan'];
    let DN3 = ['the', 'luffy', 'bros', 'sierra'];
    let DN4 = ['world', 'nika', 'ds', '117'];
    let DN5 = ['com','net','org','us']

    /*for(in1=0;in1<DN1.length;in1++) {
        for(in2=0;in2<DN2.length;in2++){
            for(in3=0;in3<DN3.length;in3++){
                for(in4=0;in4<DN4.length;in4++){
                    for(in5=0;in5<DN5.length;in5++){
                        console.log(`${DN1[in1]}${DN2[in2]}${DN3[in3]}${DN4[in4]}.${DN5[in5]}`);
                    }
                }
            }
        }
    }*/

    let oneIn = 0;
    let twoIn = 0;
    let threeIn = 0;
    let fourIn = 0;
    let fiveIn = 0;

    for (oneIn in DN1) {
        for (twoIn in DN2) {
            for (threeIn in DN3) {
                for (fourIn in DN4) {
                    for (fiveIn in DN5) {
                        console.log(`${DN1[oneIn]}${DN2[twoIn]}${DN3[threeIn]}${DN4[fourIn]}.${DN5[fiveIn]}`)
                    }
                }
            }
        }
    }

    iterationTotal = DN1.length * DN2.length * DN3.length * DN4.length * DN5.length;
    console.log(iterationTotal);
}