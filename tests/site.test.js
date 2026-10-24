const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const root=path.join(__dirname,'..');const pages=['index.html','services.html','book.html','contact.html'];
test('all four pages exist and contain a body',()=>pages.forEach(page=>{const html=fs.readFileSync(path.join(root,page),'utf8');assert.match(html,/<body[\s>]/i)}));
test('navigation targets exist',()=>pages.forEach(page=>{const html=fs.readFileSync(path.join(root,page),'utf8');for(const href of html.matchAll(/href="([^"#]+\.html)"/g))assert.ok(fs.existsSync(path.join(root,href[1])),`${page}: ${href[1]}`)}));
test('app script has valid syntax',()=>assert.doesNotThrow(()=>new Function(fs.readFileSync(path.join(root,'js','app.js'),'utf8'))));
test('booking form has core named fields',()=>{const html=fs.readFileSync(path.join(root,'book.html'),'utf8');for(const name of ['name','email','date'])assert.match(html,new RegExp(`name="${name}"`))});
test('local illustrations are available',()=>['logo.svg','clinic-building.svg','stethoscope.svg','family.svg'].forEach(asset=>assert.ok(fs.existsSync(path.join(root,'assets',asset)))));
