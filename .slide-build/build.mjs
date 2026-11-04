import fs from 'node:fs/promises';
import {Presentation, PresentationFile} from 'file:///C:/Users/Thitima/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
import {finalizePresentation} from 'file:///C:/Users/Thitima/.codex/plugins/cache/openai-primary-runtime/presentations/26.1011.11113/skills/presentations/container_tools/artifact_tool_utils.mjs';
const root='C:/Users/Thitima/Desktop/Qisist/qtt2026';
const skill='C:/Users/Thitima/.codex/plugins/cache/openai-primary-runtime/presentations/26.1011.11113/skills/presentations';
await fs.mkdir(root+'/output',{recursive:true});
const p=Presentation.create({slideSize:{width:1280,height:720}});
const s=p.slides.add();s.background.fill='#101014';
function text(value,x,y,w,h,size,color='#FFFFFF',bold=false){
 const t=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 t.text=value;t.text.style={fontFamily:'Aptos',fontSize:size,color,bold};return t;
}
text('Before You Begin',72,58,1100,70,52,'#FFFFFF',true);
text('Get ready to use qBraid Lab before the workshop.',72,140,1100,42,26,'#BDBDC8');
text('What you will learn',72,224,650,44,30,'#C38BFF',true);
const steps=['Create an account and sign in.','Launch qBraid Lab.','Create a notebook and run Python code.','Save, upload, and download your notebook.','Stop your instance when you finish.'];
steps.forEach((v,i)=>{text(String(i+1).padStart(2,'0'),72,292+i*58,48,40,23,'#C38BFF',true);text(v,132,292+i*58,620,42,25);});
text('What you need',840,224,370,44,30,'#C38BFF',true);
text('A laptop or desktop computer\nwith internet access',840,292,365,80,25);
text('A web browser',840,399,365,42,25);
text('An email address you can access',840,471,365,80,25);
text('Your instructor will share workshop notebooks and additional instructions.',72,635,1120,40,21,'#BDBDC8');
await (await PresentationFile.exportPptx(p)).save(root+'/.slide-build/candidate.pptx');
const png=await p.export({slide:s,format:'png',scale:1.5});
await fs.writeFile(root+'/output/qbraid-before-you-begin.png',new Uint8Array(await png.arrayBuffer()));
await finalizePresentation({workspaceDir:root,candidatePath:root+'/.slide-build/candidate.pptx',finalPath:root+'/output/qbraid-before-you-begin.pptx',pythonExecutable:'C:/Users/Thitima/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',integrityValidatorPath:skill+'/container_tools/inspect_presentation_package_integrity.py',layoutValidatorPath:skill+'/container_tools/inspect_presentation_layout_geometry.py',layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],fontPolicy:{basis:'design',families:['Aptos']},explicitTotalSlideCount:1,verifyArtifactToolImport:true,receiptPath:root+'/.slide-build/validation.json'});
console.log('Done');


